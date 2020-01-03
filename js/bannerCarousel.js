/**
 * @Description: banner轮播
 * @author Wish
 * @date 2020/1/2
 */
const bannerSwiper = new Swiper('.banner', {
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
