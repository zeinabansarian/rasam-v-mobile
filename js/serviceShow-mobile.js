const swiper = new Swiper('.gallerySlider', {
 speed:1000,
  allowTouchMove:true,
  spaceBetween: 10,
    // If we need pagination
    pagination: {
      el: '.gallerySliderPagination',
      clickable:true,
    },
    navigation: {
        nextEl: '.nextArrowGallery',
        prevEl: '.prevArrowGallery',
      },
  });
