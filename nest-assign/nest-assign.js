const assignest = function(target, varArgs) {
  if (typeof target !== "object" || Array.isArray(target)) {
    throw new TypeError("Target needs to be an object.");
  }

  let to = Object(target);

  for (var i = 1; i < arguments.length; i++) {
    var nextSource = arguments[i];

    if (typeof nextSource !== "object" || Array.isArray(nextSource)) {
      throw new TypeError(`All sources need to be objects. Source ${i} was ${nextSource} instead.`);
    }

    var pairs = Object.entries(nextSource);
    pairs.forEach(function(pair){
      (function(key, value){
        if (typeof value == "object" && !Array.isArray(value)) {
          if (typeof to[key] == "object") {
            assignest(to[key], value);
          } else {
            to[key] = value;
          }
        } else {
          to[key] = value;
        }
      }).apply(this, pair);
    });
  }

  return to;
}

module.exports = assignest;
