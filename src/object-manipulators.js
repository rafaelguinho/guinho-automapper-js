/*!
 * Add items and values to an object at a specific path
 * (c) 2020 Rafael, MIT License
 * @param  {Object}       obj  The object
 * @param  {String} path The path to assign the value to
 * @param  {*}            val  The value to assign
 */

const putInObj = function (obj, path, val, strictMode) {

	if(strictMode && !val) return;

	var stringToPath = function (path) {

		// If the path isn't a string, return it
		if (typeof path !== 'string') return path;

		// Create new array
		var output = [];
		
		path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
		
		path = path.replace(/^\./, '');           // strip a leading dot

		// Split to an array with dot notation
		path.split('.').forEach(function (item, index) {

			// Split to an array with bracket notation
			item.split(/\[([^}]+)\]/g).forEach(function (key) {

				// Push to the new array
				if (key.length > 0) {
					output.push(key);
				}

			});

		});

		return output;

	};

	// Convert the path to an array if not already
	path = stringToPath(path);
  

	// Cache the path length and current spot in the object
	var length = path.length;
	var current = obj;

	// Loop through the path
	path.forEach(function (key, index) {

		// If this is the last item in the loop, assign the value
		if (index === length -1) {
			current[key] = val;
		}

		// Otherwise, update the current place in the object
		else {

			console.log();

			// If the key doesn't exist and the next item is not a number, create it
			if (!current[key] && !/^\d+$/.test(path[index+1])) {
				current[key] = {};
			}
			else if(!current[key] && /^\d+$/.test(path[index+1])){
				current[key] = [];
			}

			// Update the current place in the objet
			current = current[key];

		}

	});

};

/*!
 * Get value in an object at a specific path
 * (c) 2020 Rafael, MIT License
 * @param  {Object}       obj  The object
 * @param  {String} path The path to assign the value to
 * @param  {patternReplace}  if you whant to "clear" de value 
 */

const getInObj = function(obj, path, patternReplace) {
    path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    path = path.replace(/^\./, '');           // strip a leading dot
    var a = path.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in obj) {
          obj = obj[k];
        } else {
            return;
        }
	}
	
	if(patternReplace && typeof obj === 'string'){
		obj = obj.replace(patternReplace, '');   
	}
    
    return obj;
};

export { putInObj, getInObj };