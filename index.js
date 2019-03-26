const scheme = "https";
const domain = "picsum.photos";

function buildUrl(scheme, domain, path, query) {
  return (
    scheme +
    "://" +
    domain +
    "/" +
    buildPathString(path) +
    buildQueryString(query)
  );
}

function buildQueryString(queryObject) {
  const queryParts = Object.keys(queryObject).map(key => {
    const value = queryObject[key].toString();
    return value.length ? key.toString() + "=" + value : key.toString();
  });
  return queryParts.length ? "/?" + queryParts.join("&") : "";
}

function buildPathString(pathParts) {
  return pathParts.join("/");
}

/**
 * Gets the url of the image on Lorem Picsum (see https://picsum.photos/). The only required option is `width`.
 *
 * Possible options are:
 * - `width` (number)
 * - `height` (number)
 * - `image` (number)
 * - `grayscale` (boolean)
 * - `random` (boolean)
 * - `blur` (boolean)
 * - `gravity` (string, one of "east", "north", "south", "west" or "center")
 *
 * Note: `random` is ignored if `image` is supplied.
 *
 * @param {object} opts The options describing the image.
 * @returns {string} Returns the url to the image.
 */
function loremPicsum(opts) {
  // build the path array
  const path = [];

  if (typeof opts === "undefined") {
    throw new Error("opts must be an object");
  }

  if (typeof opts.width !== "number") {
    throw new Error("opts.width must be a number");
  }

  if (opts.grayscale) {
    path.push("g");
  }

  path.push(opts.width.toString());

  if (opts.height) {
    path.push(opts.height.toString());
  }

  // build the query object
  const query = {};

  if (typeof opts.image !== "undefined") {
    query.image = opts.image.toString();
  } else {
    if (opts.random) {
      query.random = "";
    }
  }

  if (opts.blur) {
    query.blur = "";
  }

  if (opts.gravity) {
    query.gravity = opts.gravity;
  }

  // return the url
  return buildUrl(scheme, domain, path, query);
}

module.exports = loremPicsum;
