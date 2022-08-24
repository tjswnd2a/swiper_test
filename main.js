
new Swiper('.swiper-vertical .swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  resistance : false,
  slideToClickedSlide : true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

});

new Swiper('.swiper-horizontal .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  resistance : false,
  slideToClickedSlide : true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});