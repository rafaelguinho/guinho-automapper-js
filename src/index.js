import { putInObj, getInObj } from "./object-manipulators.js";

function map(objOrigin, objDest, mapping) {
  convert(objOrigin, objDest, mapping);

  return objDest;
}

function convert(obj1, obj2, mapping) {
  mapping.forEach((map) => {
    const value = getValue(obj1, map);

    putInObj(obj2, map.to, value);
  });
}

function getValue(obj1, map) {
  if (map.type === "process-from") {
    return getProcessing(obj1, map);
  } else {
    return getInObj(obj1, map.from, map.fromPatternReplace);
  }
}

function getProcessing(obj1, map) {
  const id = getInObj(obj1, map.process_from.id_field);

  const arr = obj1[map.process_from.collection_find];

  const item = arr.find(map.process_from.find(id));

  return getInObj(item, map.process_from.field_find);
}

function mapReverse(objOrigin, objDest, mapping) {
  convertReverse(objOrigin, objDest, mapping);

  return objDest;
}

function convertReverse(obj1, obj2, mapping) {
  mapping.forEach((map) => {
    const value = getInObj(obj2, map.to);
    putInObj(obj1, map.from, value);
  });
}

export { map, mapReverse };
