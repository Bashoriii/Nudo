<script setup>
import { ref, computed } from 'vue';
// import { handlePagination } from '@/stores/catalogPagination';
import navHeader from '@/components/Navbar.vue';
import footerContent from '@/components/Footer.vue';
import navCatalog from '@/components/Nav-Catalog.vue';
import blueHoodie from '@/assets/images/hoodies/blue-crewneck.png';

// Import icons
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCart, mdiStar, mdiStarHalfFull } from '@mdi/js';

// const pager = handlePagination();
const catalogProducts = [
  {
    id: 1,
    img: blueHoodie,
    title: 'Blue Hoodie',
    price: '$69',
    star: '4.6',
    review: '75',
  },
  {
    id: 2,
    img: blueHoodie,
    title: 'Blue Hoodie',
    price: '$69',
    star: '4.6',
    review: '75',
  },
  {
    id: 3,
    img: blueHoodie,
    title: 'Blue Hoodie',
    price: '$69',
    star: '4.6',
    review: '75',
  },
  {
    id: 4,
    img: blueHoodie,
    title: 'Blue Hoodie',
    price: '$69',
    star: '4.6',
    review: '75',
  },
  {
    id: 5,
    img: blueHoodie,
    title: 'Blue Hoodie',
    price: '$69',
    star: '4.6',
    review: '75',
  },
  {
    id: 5,
    img: blueHoodie,
    title: 'Blue Hoodie',
    price: '$69',
    star: '4.6',
    review: '75',
  },
  {
    id: 5,
    img: blueHoodie,
    title: 'Blue Hoodie',
    price: '$69',
    star: '4.6',
    review: '75',
  },
  {
    id: 5,
    img: blueHoodie,
    title: 'Blue Hoodie',
    price: '$69',
    star: '4.6',
    review: '75',
  },
  {
    id: 5,
    img: blueHoodie,
    title: 'Blue Hoodie',
    price: '$69',
    star: '4.6',
    review: '75',
  },
  {
    id: 5,
    img: blueHoodie,
    title: 'Blue Hoodie',
    price: '$69',
    star: '4.6',
    review: '75',
  },
  {
    id: 5,
    img: blueHoodie,
    title: 'Blue Hoodie',
    price: '$69',
    star: '4.6',
    review: '75',
  },
  {
    id: 5,
    img: blueHoodie,
    title: 'Blue Hoodie',
    price: '$69',
    star: '4.6',
    review: '75',
  },
  {
    id: 5,
    img: blueHoodie,
    title: 'Blue Hoodie',
    price: '$69',
    star: '4.6',
    review: '75',
  },
  {
    id: 5,
    img: blueHoodie,
    title: 'Blue Hoodie',
    price: '$69',
    star: '4.6',
    review: '75',
  },
];

let page = ref(1);
const perPage = 8;

const data = Array.from(catalogProducts).map((item) => {
  return { product: `${item}` };
});

const paginatedData = computed(() =>
  data.slice((page.value - 1) * perPage, page.value * perPage)
);

const nextPage = () => {
  if (page.value !== Math.ceil(data.length / perPage)) {
    page.value += 1;
  }
};

const backPage = () => {
  if (page.value !== 1) {
    page.value -= 1;
  }
};

const goToPage = (numPage) => {
  page.value = numPage;
};
</script>

<template>
  <header>
    <navHeader />
  </header>
  <!-- <div class="catalog-page">
    <div class="route-location">
      <RouterLink to="/">Home</RouterLink>
      <p>/</p>
      <RouterLink to="/catalog">Catalog</RouterLink>
    </div>
    <div class="all-catalog-section">
      <div class="all-catalog-title">
        <navCatalog />
      </div>
      <div class="all-catalog-products">
        <router-view />
        <div v-for="item in pager.paginatedData" class="catalog-cards">
          <div class="img-product">
            <img src="@/assets/images/hoodies/blue-crewneck.png" alt="hoodie" />
          </div>
          <div class="name-product">
            <h2>Blue</h2>
          </div>
          <div class="price-product">
            <p>$99.99</p>
          </div>
          {{ item.value }}
        </div>
      </div>
      <div class="catalog-pagination">
        <button class="prev" @click="pager.backPage">prev</button>
        <button
          v-for="pageNumber in Math.ceil(pager.data.length / pager.perPage)"
          :key="pageNumber"
          @click="() => pager.goToPage(pageNumber)"
        >
          {{ pageNumber }}
        </button>
        <button class="next" @click="pager.nextPage">next</button>
      </div>
    </div>
  </div> -->
  <div class="catalog-page">
    <div class="route-location">
      <RouterLink to="/">Home</RouterLink>
      <p>/</p>
      <RouterLink to="/catalog">Catalog</RouterLink>
    </div>
    <div class="catalog-section">
      <div class="product-category">
        <navCatalog />
      </div>
      <div class="product-cards-section">
        <div class="catalog-cards" v-for="item in paginatedData" :key="item.id">
          <div class="product-img">
            <img :src="item.img" />
          </div>
          <div class="product-title">
            <h1>{{ item.title }}</h1>
          </div>
          {{ item.product }}
          <div class="product-review">
            <p class="ready-stock">In Stock</p>
            <svg-icon
              v-for="i in 4"
              type="mdi"
              :path="mdiStar"
              class="star-icon"
            ></svg-icon>
            <svg-icon
              type="mdi"
              :path="mdiStarHalfFull"
              class="star-icon"
            ></svg-icon>
            <p class="reviews">{{ item.star }} ({{ item.review }} reviews)</p>
          </div>
          <div class="product-price go-cart">
            <p>{{ item.price }}</p>
            <RouterLink to="#cart-keranjang">
              <svg-icon type="mdi" :path="mdiCart"></svg-icon>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="catalog-pagination">
        <button class="prev" @click="backPage">prev</button>
        <button
          v-for="pageNumber in Math.ceil(data.length / perPage)"
          :key="pageNumber"
          @click="() => goToPage(pageNumber)"
        >
          {{ pageNumber }}
        </button>
        <button class="next" @click="nextPage">next</button>
      </div>
    </div>
  </div>
  <footer>
    <footerContent />
  </footer>
</template>
