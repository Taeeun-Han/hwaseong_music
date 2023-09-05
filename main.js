document.body.append

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    zoom: {
      maxRatio: 3,
      minRatio: 1
    },
  
    on: {
      slideChangeTransitionEnd: function () {
        console.log('clicked!')
        this.zoom.in();
      }
    },
  })