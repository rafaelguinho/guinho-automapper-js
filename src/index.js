import { putInObj, getInObj } from './object-manipulators.js';

function map(objOrigin, objDest, mapping, strictMode) {
  convert(objOrigin, objDest, mapping, strictMode);

  return objDest;
}

function convert(obj1, obj2, mapping, strictMode) {
  mapping.forEach((map) => {
    let value = getValue(obj1, map);
    if (!value && map.fallback_value) {
      value = map.fallback_value;
    }

    putInObj(obj2, map.to, value, strictMode);
  });
}

function getValue(obj1, map) {
  if (map.type === 'process-from') {
    return getProcessing(obj1, map);
  } else if (map.type === 'transform-from') {
    return getTransform(obj1, map.from, map.transform);
  } else {
    return getInObj(obj1, map.from, map.fromPatternReplace);
  }
}

function getTransform(obj1, path, transform) {
  const value = getInObj(obj1, path);

  return transform(value);
}

function getProcessing(obj1, map) {
  const id = getInObj(obj1, map.process_from.id_field);

  const arr = obj1[map.process_from.collection_find];

  const item = arr.find(map.process_from.find(id));

  return getInObj(item, map.process_from.field_find);
}

function mapReverse(objOrigin, objDest, mapping, strictMode) {
  convertReverse(objOrigin, objDest, mapping, strictMode);

  return objDest;
}

function convertReverse(obj1, obj2, mapping, strictMode) {
  mapping.forEach((map) => {
    const value = getInObj(obj2, map.to);
    putInObj(obj1, map.from, value, strictMode);
  });
}

export { map, mapReverse };
