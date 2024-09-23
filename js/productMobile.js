let ProIMG =document.querySelector('.Gallery-Container img')
let FullScreenBtn = document.querySelector('.fullScreen')
let ZoomBtn = document.querySelector('.zoom')
let DownloadBtn = document.querySelector('.download')
let url = window.location.href 
FullScreenBtn.addEventListener('click',()=>{
    fullscreen()
})
DownloadBtn.addEventListener('click',()=>{
    downloadIMG()
})

 //fullscreen image
     // zoom
      function fullscreen(){
      //fullscreen image
      let fullIMG =ProIMG
      let imgSRC = fullIMG.getAttribute('src')
      window.open(imgSRC);
      }
      function downloadIMG(){
      let fullIMG =ProIMG
      let imgSRC = fullIMG.getAttribute('src')
      DownloadBtn.setAttribute('href',`${url}${imgSRC}`)
      }

  //Gallery slider
let GallerySlider = new Swiper('.swiper-gallery',{
    speed: 1000,
    slidesPerView:1,
    spaceBetween: 30,
    grabCursor:true,
    pagination: {
        el: '.Section-2 .Gallery-Container .swiper-pagination',
              clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '<span class="line"></span>' + '</span>';
          },
      },
      navigation: {
        nextEl: ".Section-2 .Gallery-Container .swiper-button-next",
        prevEl: ".Section-2 .Gallery-Container .swiper-button-prev",
      },
      on:{
        init(e){
          console.log('iniit');
          
          // let link = e.slides[GallerySlider.activeIndex].querySelector('.ToolsContainer').getAttribute('data-link')
          let slidesLength = e.slides.length
          console.log(e.slides.length);
          let linkdinIMG = document.querySelector('.swiper-gallery .swiper-slide-active .linkdin a')
          let whatsappIMG = document.querySelector('.swiper-gallery .swiper-slide-active .whatsapp a')
          let instagramIMG = document.querySelector('.swiper-gallery .swiper-slide-active .instagram a')
          let aparatIMG = document.querySelector('.swiper-gallery .swiper-slide-active .aparat a')
          let pinterestIMG = document.querySelector('.swiper-gallery .swiper-slide-active .pinterest a')
          let IMG
          for(let i = 0 ; i< slidesLength ; i++){
            linkdinIMG = e.slides[i].querySelector('.linkdin a')
            whatsappIMG = e.slides[i].querySelector('.whatsapp a')
            instagramIMG = e.slides[i].querySelector('.instagram a')
            pinterestIMG = e.slides[i].querySelector('.pinterest a')
            IMG = e.slides[i].querySelector('.IMG').getAttribute('data-zoomist-src')
            linkdinIMG.setAttribute('href',`https://www.linkedin.com/shareArticle?mini=true&summary=${IMG}`)
            whatsappIMG.setAttribute('href',`https://api.whatsapp.com/send?text=${url}/${IMG}`)
            instagramIMG.setAttribute('href',`https://www.instagram.com/?url=${url}/${IMG}`)
            pinterestIMG.setAttribute('href',`http://pinterest.com/pinthis?url=${IMG}`)
          }
        
          
        },
      }
   
  })

//   Zoom Gallery
let gallerySlides = document.querySelectorAll('.swiper-gallery .swiper-slide')

let mainIMG
let mainResult
let is = true
for(let g=0 ; g<gallerySlides.length;g++){
    gallerySlides[g].setAttribute('data-iss',false)
}
gallerySlides.forEach(slide=>{
  
   

})
let GIMG 
let FullScreenBtn2 = document.querySelectorAll('.Section-2 .fullScreen')
let DownloadBtn2 = document.querySelectorAll('.Section-2 .download')
FullScreenBtn2.forEach(f=>{
  f.addEventListener('click',(e)=>{
    //fullscreen image
    GIMG =e.currentTarget.parentElement.parentElement.children[0].children[0]
     let fullIMG =GIMG
    let imgSRC = fullIMG.getAttribute('data-zoomist-src')
    window.open(imgSRC);
    console.log(fullIMG);
})
})
DownloadBtn2.forEach(d=>{
  d.addEventListener('click',(e)=>{
    GIMG =e.currentTarget.parentElement.parentElement.children[0].children[0]
    console.log(GIMG);
    let fullIMG =GIMG
    let imgSRC = fullIMG.getAttribute('data-zoomist-src')
    d.setAttribute('href',`${imgSRC}`)
})
})

let shares = document.querySelectorAll('.Section-2 .Share')
shares.forEach(a=>{
  a.addEventListener('click',(e)=>{
  e.currentTarget.children[1].classList.toggle('Open')
  })
})
let shares1 = document.querySelectorAll('.Section-0 .Share')
shares1.forEach(a=>{
  a.addEventListener('click',(e)=>{
  e.currentTarget.children[1].classList.toggle('Open')
  })
})
let RelatedProduct = new Swiper('.swiper-products',{
    speed: 1000,
    slidesPerView:1.2,
    spaceBetween: 30,
    grabCursor:true,
  
  })
  let RelatedProject = new Swiper('.swiper-projects',{
    speed: 1000,
    slidesPerView:1.2,
    spaceBetween: 30,
    grabCursor:true,
  
  })
  let RelatedBlogs = new Swiper('.swiper-Blogs',{
    speed: 1000,
    slidesPerView:1,
    spaceBetween: 10,
    grabCursor:true,
    speed: 1000,
    scrollbar: {
      el: ".relProScrollbar",
      draggable:true,
    },
  })

  // share product
  let linkdin = document.querySelector('.Section-0 .linkdin a')
  let whatsapp = document.querySelector('.Section-0 .whatsapp a')
  let instagram = document.querySelector('.Section-0 .instagram a')
  let aparat = document.querySelector('.Section-0 .aparat a')
  let pinterest = document.querySelector('.Section-0 .pinterest a')
  let proLink = document.querySelector('.SocialBox').getAttribute('data-link')
 
  linkdin.setAttribute('href',`https://www.linkedin.com/shareArticle?mini=true&summary=${proLink}`)
  whatsapp.setAttribute('href',`https://api.whatsapp.com/send?text=${url}/${proLink}`)
  instagram.setAttribute('href',`https://www.instagram.com/?url=${url}/${proLink}`)
  pinterest.setAttribute('href',`http://pinterest.com/pinthis?url=${proLink}`)


 // init
new Zoomist('#my-zoomist', {
    height: '75%',
    zoomer: true
  })

//   init zoomer slider
let gallerys = document.querySelectorAll('.swiper-gallery .swiper-slide')
console.log('slider',gallerys.forEach);
for(let k = 0 ; k< gallerys.length;k++){
    let img = gallerys[k].querySelector('.img > div')
    img.setAttribute('id',`zoom-${k}`)
    console.log('d',document.querySelector(`#zoom-${k}`));
        new Zoomist(`#zoom-${k}`, {
            height: '75%',
            zoomer: true
          })
 
   
}
