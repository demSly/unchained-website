const { lookup } = require('geoip-country');

const logger = console;

module.exports = (ip) => {
  const country = lookup(ip);
  logger.log('IP: ', ip, ' resolved to country: ', country);
  return country;
};
