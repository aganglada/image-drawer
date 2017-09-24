import ContourFinder from './vendor/ContourFinder';

export default (url, { maxResolution = 400 } = {}) => {
  function onImageLoaded() {
    const contourFinder = ContourFinder();
    const { width, height } = getImageSize(img);
  }

  function createImage() {
    const img = new Image();
    img.src = url;
    img.onload = onImageLoaded;
  }

  function getImageSize(img) {
    let width, height;

    if (img.width > img.height) {
      width = Math.min(img.width, maxResolution);
      height = parseInt(width * img.height / image.width, 10);
    } else {
      height = Math.min(img.height, maxResolution);
      width = parseInt(height * img.width / img.height, 10);
    }

    return { width, height };
  }
};
