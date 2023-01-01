function getElementOfArrayProperty(obj, key, index) {
  return (obj[key] instanceof Array) ? obj[key][index] : undefined; 
}
