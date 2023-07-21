<script setup>
import Navbar from '../components/Navbar.vue';
import Hero from '../components/Highlight-Hero.vue';
import featuredProduct from '../components/Featured-Product.vue';
import neppoProfile from '../components/Neppo-Profile.vue';
import category from '../components/Categories.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Hero />
    <featuredProduct />
    <neppoProfile />
    <category />
  </main>
  <footer>
    <p>INi footer</p>
  </footer>
</template>
