import drawer from '../src/index';

const image = document.querySelector('img');
const imageUrl = image.dataset.src;

drawer(imageUrl);
