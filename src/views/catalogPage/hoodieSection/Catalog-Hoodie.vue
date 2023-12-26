<script setup>
import { handlePagination } from '@/stores/catalogPagination';
import navHeader from '@/components/Navbar.vue';
import footerContent from '@/components/Footer.vue';
import navCatalog from '@/components/Nav-Catalog.vue';

const pager = handlePagination();
</script>

<template>
  <header>
    <navHeader />
  </header>
  <div class="catalog-page">
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
            <h1>Blue Hoodie</h1>
          </div>
          <div class="price-product">
            <p>$99.99</p>
          </div>
          {{ item.value }}
        </div>
      </div>
      <div class="catalog-pagination">
        <button @click="pager.backPage">prev</button>
        <button
          v-for="pageNumber in Math.ceil(pager.data.length / pager.perPage)"
          :key="pageNumber"
          @click="() => pager.goToPage(pageNumber)"
        >
          {{ pageNumber }}
        </button>
        <button @click="pager.nextPage">next</button>
      </div>
    </div>
  </div>
  <footer>
    <footerContent />
  </footer>
</template>
