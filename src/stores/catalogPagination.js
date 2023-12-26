import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const handlePagination = defineStore('pagination', () => {
  let page = ref(1);
  const perPage = 8;
  const products = [
    'Blue Hoodie',
    'Red Hoodie',
    'Yellow Hoodie',
    'Sandal',
    'White Cap',
    'Black Shoes',
    'Blue Hoodie',
    'Red Hoodie',
    'Yellow Hoodie',
    'Sandal',
    'White Cap',
    'Black Shoes',
    'Blue Hoodie',
    'Red Hoodie',
    'Yellow Hoodie',
    'Sandal',
    'White Cap',
    'Black Shoes',
  ];

  // const data = Array.from(Array(15).keys()).map((item) => {
  //   return { index: item, value: `Hallo ${item}` };
  // });

  const data = Array.from(products).map((item) => {
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

  return { data, paginatedData, perPage, page, nextPage, backPage, goToPage };
});

// Simple counter example
// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0);
//   const name = ref('Eduardo');
//   const doubleCount = computed(() => count.value * 2);
//   function increment() {
//     count.value++;
//   }

//   function decrement() {
//     count.value--;
//   }

//   return { count, name, doubleCount, increment, decrement };
// });
