module.exports = (name, typeFunction = function() {}, options = {}) => {
  const fields = {};
  for (let key in options) {
    fields[key] = { type: options[key] };
  }
  return new typeFunction({ name, fields });
}
