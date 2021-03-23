module.exports = function (crypto) {
  if (!crypto.randomUUID) crypto.randomUUID = require('./randomUUID');
};
