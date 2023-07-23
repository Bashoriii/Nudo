<script setup>
import Navbar from '../components/Navbar.vue';
import Hero from '../components/Highlight-Hero.vue';
import featuredProduct from '../components/Featured-Product.vue';
import neppoProfile from '../components/Neppo-Profile.vue';
import category from '../components/Categories.vue';
import newsLetter from '../components/News-Letter.vue';
import footerContent from '../components/Footer.vue';
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
    <newsLetter />
  </main>
  <footer>
    <footerContent />
  </footer>
</template>
