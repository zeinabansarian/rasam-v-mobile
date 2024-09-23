const swiper = new Swiper(".gallerySlider", {
  speed: 1000,
  allowTouchMove: true,
  spaceBetween: 10,
  // If we need pagination
  pagination: {
    el: ".gallerySliderPagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".nextArrowGallery",
    prevEl: ".prevArrowGallery",
  },
});

const projectSlider = new Swiper(".projectSlider", {
  spaceBetween: 32,
  slidesPerView: 1.2,
  speed: 1000,
});

const relProduct = new Swiper(".relProduct", {
  spaceBetween: 26,
  slidesPerView: 1.1,
  speed: 1000,

});
const relArticle = new Swiper(".relArticle", {
  spaceBetween: 10,
  slidesPerView: 1,
  speed: 1000,
  scrollbar: {
    el: ".relProScrollbar",
    draggable:true,
  },
});
