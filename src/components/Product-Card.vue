<template>
  <swiper
    class="mySwiper featured-product-list"
    :loop="true"
    :navigation="true"
    :slidesPerView="4"
    :spaceBetween="30"
    :modules="modules"
  >
    <swiper-slide
      v-for="item in productDetail"
      :key="img"
      class="neppo-featured-product cards"
    >
      <div class="product-img">
        <img :src="item.img" class="card-img" alt="featured product" />
      </div>
      <div class="product-name">
        <h1>{{ item.title }}</h1>
      </div>
      <div class="product-review">
        <p class="ready-stock">In Stock</p>
        <svg-icon
          v-for="i in 4"
          :key="i"
          type="mdi"
          :path="mdiStar"
          class="star-icon"
        ></svg-icon>
        <svg-icon
          type="mdi"
          :path="mdiStarHalfFull"
          class="star-icon"
        ></svg-icon>
        <p class="reviews">({{ item.star }} - {{ item.review }} reviews)</p>
      </div>
      <div class="product-price go-cart">
        <p>{{ item.price }}</p>
        <RouterLink to="#cart-keranjang">
          <svg-icon type="mdi" :path="path"></svg-icon>
        </RouterLink>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import swiper.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

// Import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import icons
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCart, mdiStar, mdiStarHalfFull } from '@mdi/js';

// Import Featured Images
// import orangeCropped from '@/assets/images/featuredImages/orange-cropped.png';
// import coats from '@/assets/images/featuredImages/coats.png';
import chocoCropped from '@/assets/images/featuredImages/choco-cropped.png';
import chinoCropped from '@/assets/images/featuredImages/chino-cropped.png';
import darkLongsleeve from '../assets/images/featuredImages/dark-longsleeve.png';
import darkHoodie from '@/assets/images/featuredImages/dark-hoodie.png';
import parka from '@/assets/images/featuredImages/parka.png';
import tracktop from '@/assets/images/featuredImages/tracktop-indigo.png';
import pocketTshirt from '@/assets/images/featuredImages/pockets-tshirt.png';
import linen from '@/assets/images/featuredImages/linen.png';
import creamPants from '@/assets/images/featuredImages/cream-chino.png';
import brownPants from '@/assets/images/featuredImages/brown-chino.png';
import strapSandal from '@/assets/images/featuredImages/strap-sandal.png';
import unisexSandal from '@/assets/images/featuredImages/unisex-sandal.png';
import blue from '@/assets/images/hoodies/orange-crewneck.png';

export default {
  components: {
    SvgIcon,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data() {
    return {
      path: mdiCart,
      mdiStar,
      mdiStarHalfFull,

      productDetail: [
        {
          img: chocoCropped,
          title: 'Choco Coats',
          price: '$99',
          star: '4.6',
          review: '75',
        },
        {
          img: chinoCropped,
          title: 'Chino Coats',
          price: '$89',
          star: '4.6',
          review: '71',
        },
        {
          img: darkLongsleeve,
          title: 'Dark Longsleeve',
          price: '$49',
          star: '4.1',
          review: '27',
        },
        {
          img: darkHoodie,
          title: 'Dark Hoodie',
          price: '$59',
          star: '4.8',
          review: '97',
        },
        {
          img: parka,
          title: 'Parka Jacket',
          price: '$129',
          star: '4.2',
          review: '33',
        },
        {
          img: tracktop,
          title: 'Tracktop Indigo',
          price: '$119',
          star: '4.2',
          review: '31',
        },
        {
          img: pocketTshirt,
          title: 'Pocket T-Shirt',
          price: '$29',
          star: '4.5',
          review: '66',
        },
        {
          img: linen,
          title: 'Linen T-Shirt',
          price: '$29',
          star: '4.5',
          review: '67',
        },
        {
          img: creamPants,
          title: 'Cream Pants',
          price: '$35',
          star: '4.5',
          review: '61',
        },
        {
          img: brownPants,
          title: 'Brown Pants',
          price: '$35',
          star: '4.5',
          review: '67',
        },
        {
          img: strapSandal,
          title: 'Strap Sandal',
          price: '$69',
          star: '4.5',
          review: '60',
        },
        {
          img: unisexSandal,
          title: 'Unisex Sandal',
          price: '$69',
          star: '4.7',
          review: '87',
        },
      ],
    };
  },
};
</script>
