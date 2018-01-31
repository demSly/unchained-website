export default (mediaArray) => {
  const media = (mediaArray && mediaArray.length > 0) ?
    mediaArray[0] : null;
  if (media) {
    return {
      title: (media.texts && media.texts.title) || '',
      url: media.file.url,
    };
  }
  return {
    title: '',
    url: '/static/img/slider/apfel-new.png',
  };
};
