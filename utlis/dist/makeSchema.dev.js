"use strict";

module.exports = function (name) {
  var typeFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var fields = {};

  for (var key in options) {
    fields[key] = {
      type: options[key]
    };
  }

  return new typeFunction({
    name: name,
    fields: fields
  });
};