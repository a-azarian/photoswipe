
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

function adjustGallerySize() {
  const gallery = document.querySelector('.pswp-gallery');
  if (gallery) {
    gallery.style.width = `${window.innerWidth}px`;
    gallery.style.height = `${window.innerHeight}px`;
  }
}

// تنظیم اندازه گالری هنگام بارگذاری صفحه
window.addEventListener('load', adjustGallerySize);

// تنظیم اندازه هنگام تغییر اندازه یا چرخاندن دستگاه
window.addEventListener('resize', adjustGallerySize);
window.addEventListener('orientationchange', adjustGallerySize);
