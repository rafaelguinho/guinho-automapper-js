import { putInObj, getInObj } from "./object-manipulators.js";

function map(objOrigin, objDest, mapping){
    convert(objOrigin, objDest, mapping);

    return objDest;
}

function convert(obj1, obj2, mapping){
    mapping.forEach((map) => {
        const value = getInObj(obj1, map.from, map.fromPatternReplace);
        putInObj(obj2, map.to, value);
    });
}

function mapReverse(objOrigin, objDest, mapping){
    convertReverse(objOrigin, objDest, mapping);

    return objDest;
}


function convertReverse(obj1, obj2, mapping){
    mapping.forEach((map) => {
        const value = getInObj(obj2, map.to);
        putInObj(obj1, map.from, value);
    });
}

export {map, mapReverse};