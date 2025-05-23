
import PhotoSwipeLightbox from './photoswipe/photoswipe-lightbox.esm.js';
import PhotoSwipe from './photoswipe/photoswipe.esm.js';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--native-fs',
  children: 'a',
  pswpModule: PhotoSwipe
});

lightbox.init();

document.getElementById("open-gallery").addEventListener("click", function(e) {
  e.preventDefault();
  const firstLink = document.querySelector('#gallery--native-fs a');
  if (firstLink) {
    firstLink.click();
  }
});
