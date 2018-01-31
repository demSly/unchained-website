const { cleanImage } = require('../helpers');

module.exports = {
  avatar(obj) {
    return cleanImage(obj.avatar);
  },
};
