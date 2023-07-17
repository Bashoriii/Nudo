<script setup>
import Test from '../components/___testing___.vue';
import Navbar from '../components/Navbar.vue';
import Hero from '../components/Highlight-Hero.vue';
import featuredProduct from '../components/Featured-Product.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Hero />
    <featuredProduct />
    <!-- <Test /> -->
  </main>
  <footer>
    <p>INi footer</p>
  </footer>
</template>
