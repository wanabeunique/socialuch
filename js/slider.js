const swiper = new Swiper('#album-swiper', {
  // configure Swiper to use modules
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 600,
  breakpoints: {
    1000: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    850:{
      slidesPerView: 3,
      spaceBetween: 10,
    },
    600:{
      slidesPerView: 2,
      spaceBetween: 10,
    }
  }
});