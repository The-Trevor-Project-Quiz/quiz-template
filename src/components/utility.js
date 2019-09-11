/**
 * This serialzes an object into a URL-encoded query string.
 * @param {object} obj - Object to serialize.
 * @return {string} - Serialized string. {foo: "hi there", bar: "100%" } =>
 *  'foo=hi%20there&bar=100%25'
 */
export function serialize(obj) {
    const str = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        str.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
      }
    }
    return str.join('&');
  }

  export const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);