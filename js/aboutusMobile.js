 //Gallery slider
 let GallerySlider = new Swiper('.Section-6 .swiper-gallery',{
    speed: 1000,
    slidesPerView:3.8,
    // spaceBetween: 10,
    grabCursor:true,
    centeredSlides: true,
    loop:true,
    pagination: {
        el: '.Section-6 .swiper-pagination',
              clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '<span class="line"></span>' + '</span>';
          },
      },
 
  })
  window.addEventListener('scroll',()=>{
    if(window.pageYOffset>0){
      document.querySelector('header').classList.add('GoBottom')
    }
  else{
    document.querySelector('header').classList.remove('GoBottom')
  }
  })
  let boxSlider = new Swiper('.swiper-box',{
    speed: 1000,
    slidesPerView:1.2,
    spaceBetween: 10,
    grabCursor:true,
    centeredSlides: true,
    // loop:true,
    scrollbar: {
      el: ".relProScrollbar",
      draggable:true,
    },
  })