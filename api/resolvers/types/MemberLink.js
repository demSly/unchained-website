const crypto = require('crypto');

const hash = text => crypto
  .createHash('md5')
  .update(text, 'utf8')
  .digest('hex');

module.exports = {
  _id({ value: { url } }) {
    return hash(url);
  },
  name({ value: { name } }) {
    return name;
  },
  url({ value: { url } }) {
    return url;
  },
};
