const { cleanImage } = require('../helpers');

module.exports = {
  logo(obj) {
    return cleanImage(obj.logo);
  },
};
