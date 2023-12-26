<!-- <template>
  <div class="testing-page">
    <h1>Name {{ store.name }}</h1>
    <h1>{{ store.count }}</h1>
    <h1>Double count is {{ store.doubleCount }}</h1>
    <button @click="store.increment">+</button>
    <button @click="store.decrement">-</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/handlingPagination.js';

const store = useCounterStore();
</script> -->

<!-- ============================================================================== -->
<!-- <template>
  <div>
    <h1>test</h1>
  </div>
</template>

<script>
export default {};
</script> -->

<!-- ============================================================================== -->

<template>
  <!-- <div v-for="item in paginatedData" :key="item.index">
    {{ item.value }}
  </div>
  <button @click="backPage">prev</button>
  <button
    v-for="item in Math.ceil(data.length / perPage)"
    :key="item"
    @click="() => goToPage(item)"
  >
    {{ item }}
  </button>
  <button @click="nextPage">next</button> -->

  <div class="test">
    <div v-for="item in store.paginatedData" class="list-item">
      {{ item.product }}
    </div>
    <button @click="store.backPage">prev</button>
    <button
      v-for="item in Math.ceil(store.data.length / store.perPage)"
      :key="item"
      @click="() => store.goToPage(item)"
    >
      {{ item }}
    </button>
    <button @click="store.nextPage">prev</button>
    <h1>showing item per page {{ store.perPage }}</h1>
  </div>

  <div class="test-json-file">
    <div v-for="p in myItem" class="json-container">
      <div class="product-title">
        <h1>{{ p.img }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { handlePagination } from '@/stores/catalogPagination';
import myProduct from '@/assets/productCard.json';

const store = handlePagination();
const myItem = myProduct;
</script>

<!-- <script>
// import handlePagination from '../stores/catalogPagination';
import handlePagination from './handlePagination';

export default {
  setup() {
    const handlePaginationValue = handlePagination();

    return { ...handlePaginationValue };
  },
};
</script> -->
