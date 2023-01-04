'use strict';

// header - search/input
const searchEl = document.querySelector('.search');
const searchInput = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
  searchInput.focus();
});

searchInput.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  searchInput.setAttribute('placeholder', '통합검색');
});
searchInput.addEventListener('blur', () => {
  searchEl.classList.remove('focused');
  searchInput.setAttribute('placeholder', '');
});

// header - badges
const badgeEl = document.querySelector('header .badges');
const toTopEl= document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(() => {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    gsap.to(badgeEl, .5, {
      opacity: 0,
      display: 'none'
    });
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    gsap.to(badgeEl, .5, {
      opacity: 1,
      display: 'block'
    });
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300));

toTopEl.addEventListener('click', () => {
  gsap.to(window, .7, {
    scrollTo: 0
  })
});

// visual - fadein
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .5,
    opacity: 1
  });
});

// promotion - hide
const promotionEl = document.querySelector('.promotion');
const promoToggleBtn = document.querySelector('.promotion__toggle');
let isHidePromotion = false;

promoToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});

// swiper
new Swiper('.notice__line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  navigation : {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  },
  pagination : {
    el: '.promotion .swiper-pagination',
    clickable: true
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation : {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

// scrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach((spyEl) => {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});