// Server Control Template `.gia` serializer.
//
//   Image Processing -> ImagePlan -> this module
//
// The pixel work, object identity and transforms all come from the ImagePlan
// (see imagePlan.ts); this file only knows how a Server Control Template
// stores them: UiShapeStyle under property 21 / type 38, container resource
// class 61, and the property/descriptor set the server editor expects.
//
// The Client Control Template equivalent lives in giaClient.ts.

import protobuf from 'protobufjs'
import {
  buildExportTag,
  bytesToPayload,
  decodeField501Varint,
  encodeField501String,
  encodeField501Varint,
  scaleForTransformEntry,
  withGiaHeader,
} from './giaCommon'
import { buildImagePlan, emptyPlannedShape, type PlannedShape } from './imagePlan'
import type { DeviceScales, GeneratorConfig, RectPlan } from './types'

export interface GiaTypes {
  root: protobuf.Root
  AssetBundle: protobuf.Type
  ResourceEntry: protobuf.Type
  ResourceLocator: protobuf.Type
}

function getGuid(resource: any): number {
  return Number(resource.identity?.asset_guid ?? resource.ui?.object?.guid ?? 0)
}

function setGuid(resource: any, guid: number) {
  if (!resource.identity) resource.identity = {}
  resource.identity.asset_guid = guid
  if (resource.ui?.object) resource.ui.object.guid = guid
}

function getHiddenUiId(resource: any): number | null {
  const descriptors = resource.ui?.object?.descriptors ?? []
  for (const prop of descriptors) {
    if (prop.property_id === 2 && prop.property_type === 6 && prop.raw_12) {
      return decodeField501Varint(prop.raw_12)
    }
  }
  return null
}

function findShapeProperty(uiObject: any): any {
  const props = uiObject?.properties ?? []
  const found = props.find((p: any) => p.body?.shape_style)
  if (!found) throw new Error('Could not find shape_style property')
  return found
}

function findTransformProperty(uiObject: any): any {
  const props = uiObject?.properties ?? []
  const found = props.find((p: any) => p.body?.transform)
  if (!found) throw new Error('Could not find transform property')
  return found
}

function setParentName(parent: any, name: string) {
  parent.internal_name = name
  const props = parent.ui?.object?.properties ?? []
  for (const p of props) {
    if (p.property_id === 2 && p.property_type === 15) {
      p.raw_12 = encodeField501String(name)
    }
  }
}

function setUniqueUiIdentityAndName(child: any, uniqueUiId: number, label: string) {
  const obj = child.ui.object
  for (const prop of obj.descriptors ?? []) {
    if (prop.property_id === 2 && prop.property_type === 6) {
      prop.raw_12 = encodeField501Varint(uniqueUiId)
    }
  }
  for (const prop of obj.properties ?? []) {
    if (prop.property_id === 2 && prop.property_type === 15) {
      prop.raw_12 = encodeField501String(label)
    }
  }
  child.internal_name = label
}

function ensureTransformEntryDefaults(entry: any, index: number) {
  if (!entry.fields) entry.fields = {}
  const f = entry.fields
  entry.index = index === 0 ? 0 : index
  if (!f.zoom) f.zoom = {}
  f.zoom.x = 1.0
  f.zoom.y = 1.0
  f.zoom.z = 1.0
  if (!f.anchor_min_or_pivot_a) f.anchor_min_or_pivot_a = {}
  if (!f.anchor_max_or_pivot_b) f.anchor_max_or_pivot_b = {}
  if (!f.pivot_or_alignment) f.pivot_or_alignment = {}
  f.anchor_min_or_pivot_a.x = 0.5
  f.anchor_min_or_pivot_a.y = 0.5
  f.anchor_max_or_pivot_b.x = 0.5
  f.anchor_max_or_pivot_b.y = 0.5
  f.pivot_or_alignment.x = 0.5
  f.pivot_or_alignment.y = 0.5
  if (!f.position) f.position = {}
  if (!f.size) f.size = {}
  if (!f.rotation) f.rotation = {}
}

function setChildTransform(
  child: any,
  x: number,
  y: number,
  width: number,
  height: number,
  rotationDegrees = 0,
  deviceScales: DeviceScales,
) {
  const prop = findTransformProperty(child.ui.object)
  const arr = prop.body.transform.transform_array
  if (!arr.entries || arr.entries.length === 0) {
    throw new Error('Transform array has no entries')
  }
  if (!arr.unknown_502) arr.unknown_502 = 9
  if (!arr.enabled) arr.enabled = 1

  arr.entries.forEach((entry: any, idx: number) => {
    ensureTransformEntryDefaults(entry, idx)
    const f = entry.fields
    const deviceScale = scaleForTransformEntry(deviceScales, idx)
    f.position.x = x * deviceScale
    f.position.y = y * deviceScale
    f.size.x = width * deviceScale
    f.size.y = height * deviceScale
    const rot = ((rotationDegrees % 360) + 360) % 360
    if (Math.abs(rot) < 1e-6) {
      delete f.rotation.z_degrees
    } else {
      f.rotation.z_degrees = rot
    }
  })
}

function applyShape(child: any, shape: PlannedShape, deviceScales: DeviceScales) {
  const shapeProp = findShapeProperty(child.ui.object)
  if (!shapeProp.body) shapeProp.body = {}
  if (!shapeProp.body.shape_style) shapeProp.body.shape_style = {}
  shapeProp.body.shape_style.shape_type = shape.imageId
  shapeProp.body.shape_style.color_argb = shape.colorArgb >>> 0
  setChildTransform(child, shape.x, shape.y, shape.width, shape.height, shape.rotationDegrees, deviceScales)
  setUniqueUiIdentityAndName(child, getHiddenUiId(child) ?? 0, shape.label)
}

function setParentTransform(
  parent: any,
  x: number,
  y: number,
  width: number,
  height: number,
  deviceScales: DeviceScales,
) {
  try {
    const prop = findTransformProperty(parent.ui.object)
    const arr = prop.body.transform.transform_array
    for (const [idx, entry] of (arr.entries ?? []).entries()) {
      ensureTransformEntryDefaults(entry, idx)
      const deviceScale = scaleForTransformEntry(deviceScales, idx)
      entry.fields.position.x = x * deviceScale
      entry.fields.position.y = y * deviceScale
      entry.fields.size.x = width * deviceScale
      entry.fields.size.y = height * deviceScale
    }
  } catch {
    // ignore
  }
  for (const p of parent.ui?.object?.properties ?? []) {
    if (p.body?.size_component?.size) {
      const desktopScale = scaleForTransformEntry(deviceScales, 0)
      p.body.size_component.size.x = width * desktopScale
      p.body.size_component.size.y = height * desktopScale
    }
  }
}

function cloneChild(templateChild: any, newGuid: number, parentGuid: number): any {
  const child = structuredClone(templateChild)
  const oldGuid = getGuid(templateChild)
  const oldParent = Number(templateChild.ui?.object?.parent_guid ?? 0)

  setGuid(child, newGuid)
  if (child.ui?.object) child.ui.object.parent_guid = parentGuid

  for (const propListName of ['descriptors', 'properties'] as const) {
    for (const prop of child.ui?.object?.[propListName] ?? []) {
      if (prop.id_ref_11?.guid != null) {
        if (!(prop.property_id === 1 && prop.property_type === 12 && Number(prop.id_ref_11.guid) === 2)) {
          if (Number(prop.id_ref_11.guid) === oldGuid) prop.id_ref_11.guid = newGuid
          if (oldParent && Number(prop.id_ref_11.guid) === oldParent) prop.id_ref_11.guid = parentGuid
        }
      }
      if (prop.binding?.guid != null) {
        if (Number(prop.binding.guid) === oldGuid) prop.binding.guid = newGuid
        if (oldParent && Number(prop.binding.guid) === oldParent) prop.binding.guid = parentGuid
      }
      if (prop.body?.binding?.guid != null) {
        if (Number(prop.body.binding.guid) === oldGuid) prop.body.binding.guid = newGuid
        if (oldParent && Number(prop.body.binding.guid) === oldParent) prop.body.binding.guid = parentGuid
      }
    }
  }

  return child
}

function rebuildParentRefs(parent: any, templates: any[], guids: number[]) {
  if (!parent.ui?.object) throw new Error('Parent missing UI object')
  parent.reference_list = new Array(guids.length)
  parent.ui.object.child_guids = guids
  for (let idx = 0; idx < guids.length; idx += 1) {
    const source = templateForIndex(templates, idx)
    parent.reference_list[idx] = { ...(source.identity ?? {}), asset_guid: guids[idx] }
  }
}

// The first template children are reused as-is; every further child is cloned
// from the templates in rotation.
function templateForIndex(templates: any[], idx: number): any {
  return idx < templates.length ? templates[idx] : templates[(idx - templates.length) % templates.length]
}

function patchParentDescriptorNextId(parent: any, nextChildGuid: number) {
  for (const prop of parent.ui?.object?.descriptors ?? []) {
    if (prop.property_id === 4 && prop.property_type === 4 && prop.raw_14) {
      prop.raw_14 = encodeField501Varint(nextChildGuid)
    }
  }
}

// Children are encoded in batches straight to bytes instead of materialising
// the whole bundle as one object graph, which runs out of memory on images
// with hundreds of thousands of rectangles.
const ENCODE_BATCH_SIZE = 1000

/**
 * Reads the container identity out of the bundled server template. Exposed so
 * the plan a Server Image is built from can be reproduced in tests.
 */
export function readServerTemplateIdentity(
  templateGiaBytes: Uint8Array,
  types: GiaTypes,
): { rootGuid: number; rootUiId: number } {
  const bundle = decodeBundle(templateGiaBytes, types)
  const parent = bundle.primary_resource
  if (!parent?.ui?.object) throw new Error('Template parent UI object not found')
  const rootGuid = getGuid(parent)
  if (!rootGuid) throw new Error('Could not determine parent GUID')
  return { rootGuid, rootUiId: getHiddenUiId(parent) ?? 0 }
}

function decodeBundle(templateGiaBytes: Uint8Array, types: GiaTypes): any {
  const payload = bytesToPayload(templateGiaBytes)
  const bundleMessage = types.AssetBundle.decode(payload)
  return types.AssetBundle.toObject(bundleMessage, {
    longs: Number,
    enums: Number,
    bytes: Uint8Array,
    defaults: true,
  })
}

export async function buildGiaFromRects(
  templateGiaBytes: Uint8Array,
  rects: RectPlan[],
  imgWidth: number,
  imgHeight: number,
  config: GeneratorConfig,
  types: GiaTypes,
  outputName = 'output.gia',
  onProgress?: (encoded: number, total: number) => void,
): Promise<Blob> {
  const bundle = decodeBundle(templateGiaBytes, types)

  const parent = bundle.primary_resource
  if (!parent?.ui?.object) throw new Error('Template parent UI object not found')
  const parentGuid = getGuid(parent)
  if (!parentGuid) throw new Error('Could not determine parent GUID')

  const templates: any[] = bundle.dependencies ?? []
  if (templates.length === 0) throw new Error('Template has no child dependencies')

  // Both exporters lay out identity the same way: the container GUID/UI id
  // from the template, then one per rectangle. Keeping the server template's
  // own values here is what makes existing exports unchanged.
  //
  // A Server Control Template draws its first child last, so the hierarchy
  // runs front to back and the optimizer's output is emitted as it comes.
  const plan = buildImagePlan(rects, imgWidth, imgHeight, config, {
    rootGuid: parentGuid,
    rootUiId: getHiddenUiId(parent) ?? 0,
    compositing: 'first-on-top',
  })

  setParentName(parent, plan.container.name)

  const guids = new Array<number>(rects.length)
  for (let idx = 0; idx < rects.length; idx += 1) guids[idx] = plan.guidAt(idx)

  rebuildParentRefs(parent, templates, guids)
  patchParentDescriptorNextId(parent, plan.nextFreeGuid())

  if (plan.container.applyTransform) {
    setParentTransform(
      parent,
      plan.container.x,
      plan.container.y,
      plan.container.width,
      plan.container.height,
      plan.deviceScales,
    )
  }

  const verifiedParent = types.ResourceEntry.verify(parent)
  if (verifiedParent) throw new Error(`Bundle verify failed: ${verifiedParent}`)

  const parts: Uint8Array[] = []
  let writer = protobuf.Writer.create()
  const flush = () => {
    parts.push(writer.finish())
    writer = protobuf.Writer.create()
  }

  // AssetBundle.primary_resource = 1
  types.ResourceEntry.encode(types.ResourceEntry.fromObject(parent), writer.uint32((1 << 3) | 2).fork()).ldelim()
  flush()

  const shape = emptyPlannedShape()
  for (let idx = 0; idx < rects.length; idx += 1) {
    plan.shapeAt(idx, shape)
    const dep =
      idx < templates.length ? templates[idx] : cloneChild(templateForIndex(templates, idx), shape.guid, parentGuid)

    if (idx >= templates.length) setUniqueUiIdentityAndName(dep, shape.uiId, shape.label)
    applyShape(dep, shape, plan.deviceScales)

    const verified = types.ResourceEntry.verify(dep)
    if (verified) throw new Error(`Bundle verify failed: ${verified}`)

    // AssetBundle.dependencies = 2
    types.ResourceEntry.encode(types.ResourceEntry.fromObject(dep), writer.uint32((2 << 3) | 2).fork()).ldelim()

    if ((idx + 1) % ENCODE_BATCH_SIZE === 0) {
      flush()
      onProgress?.(idx + 1, rects.length)
    }
  }

  // AssetBundle.export_tag = 3, AssetBundle.engine_version = 5
  writer.uint32((3 << 3) | 2).string(buildExportTag(parentGuid, outputName))
  writer.uint32((5 << 3) | 2).string(bundle.engine_version || '6.6.0')
  flush()

  return withGiaHeader(parts)
}
