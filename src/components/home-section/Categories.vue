<template>
  <div class="neppo-categories-section section">
    <div class="category-title">
      <h1>Catalog</h1>
    </div>
    <div class="category-container">
      <div class="category-list">
        <RouterLink
          to="#"
          v-for="cat in categoryDetail"
          :key="cat"
          class="category-item"
        >
          <img :src="cat.img" alt="hoodie" class="category-img" />
          <h1 class="category-name">{{ cat.title }}</h1>
        </RouterLink>
      </div>
      <div class="category-poster">
        <img src="@/assets/images/brown-blazzer.png" class="" alt="poster" />
        <!-- <img src="../assets/images/jackets/.png" class="" alt="test" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import hoodie from '@/assets/images/hoodies/blue-crewneck.png';
import tshirt from '@/assets/images/t-shirts/pockets-tshirt.png';
import jacket from '@/assets/images/jackets/harrington-jacket.png';
import sandal from '@/assets/images/sandals/chunky-sandal.png';
export default {
  data() {
    return {
      categoryDetail: [
        {
          img: hoodie,
          title: 'Hoodie',
        },
        {
          img: tshirt,
          title: 'T-Shirt',
        },
        {
          img: sandal,
          title: 'Sandal',
        },
        {
          img: jacket,
          title: 'Jacket',
        },
      ],
    };
  },
};
</script>
