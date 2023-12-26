import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

// Ini cuma percobaan, dan ternyata gabisa (21-10-2023)

export const productCard = defineStore('productCard', () => {
  const myProduct = [
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
  ];
});
