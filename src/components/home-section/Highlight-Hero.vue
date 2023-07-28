<template>
  <div class="highlight-slider">
    <swiper
      :spaceBetween="30"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <img src="@/assets/images/blue-blazzer.png" class="highlight-img-1" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/brown-blazzer.png" class="highlight-img-2" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/white-blazzer.png" class="highlight-img-3" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
};
</script>
