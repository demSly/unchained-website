const {
  ASSET_URL_PREFIX,
} = process.env;

module.exports.replaceRelativePathsInHTMLString = htmlString => (htmlString || '')
  .replace(new RegExp('href="\\/', 'gi'), `href="${ASSET_URL_PREFIX}/`)
  .replace(new RegExp('src="\\/', 'gi'), `src="${ASSET_URL_PREFIX}/`);

module.exports.cleanImage = (image) => {
  if (image instanceof Object && image.path) {
    return {
      path: image.path,
      meta: image.meta,
    };
  }
  return null;
};
