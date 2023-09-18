import './css/main.css'
import Swiper from 'swiper/bundle';
import 'swiper/css';

// Initialisation code
(() => {
  document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
  const Moonbase = window.Moonbase || {};
})();

// Swiper carousel - mobile
const breakpoint = 640;
const featuredProducts = document.querySelector('.swiper');

if (window.innerWidth < breakpoint && featuredProducts) {
  const swiper = new Swiper(featuredProducts, {
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
  })
}
