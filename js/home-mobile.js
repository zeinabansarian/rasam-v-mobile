document.querySelectorAll('.toggle-button').forEach(btn => {
    btn.addEventListener('click', e => {
      e.target.parentElement.classList.toggle('share__wrapper--active');
      e.target.classList.toggle('toggle-button--active');
    });
  });


  const projectSlider = new Swiper('.projectSlider', {
    spaceBetween: 32,
    slidesPerView:1.2,
    speed:1000,
  });

  const swiper = new Swiper('.swiper', {
    slidesPerView: 1.2,
  spaceBetween: 20,
  speed:1000,
    loop: false,
    centeredSlides:false,
  });


  let bgImg = document.querySelectorAll(".bgImg")
  let catBox = document.querySelectorAll(".catBox")
  bgImg[0].classList.add("activeCAtbox")

  catBox.forEach((element,i) => {
    element.addEventListener("click" , function(params) {
        $(".bgImg").removeClass("activeCAtbox")
        bgImg[i].classList.add("activeCAtbox")
    })
  });

  $(".home").imagesLoaded(function () {
    setTimeout(() => {
      const CategoriesSlider = new Swiper(".CategoriesSlider", {
        // Optional parameters
        freeMode: true,
        spaceBetween:25,
        slidesPerView: "auto",
        // And if we need scrollbar
        scrollbar: {
          el: ".CategoriesScrollbar",
          draggable:true,
        },
      });
  
      const clientSldier1 = new Swiper(".clientSldier", {
        spaceBetween: 64,
        slidesPerView: "auto",
        loop: true,
        speed: 7000,
        freeMode: true,
        centeredSlides: true,
        autoplay: {
          delay: 0,
          //  pauseOnMouseEnter:true,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".clientpagination",
          clickable: true,
        },
      });
  

      
  
    }, 500);
  });
  