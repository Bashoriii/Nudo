<script setup></script>

<template>
  <div class="catalog-title">
    <h1>Catalog</h1>
  </div>
  <div class="each-catalog-name">
    <RouterLink to="/hoodie">Hoodie</RouterLink>
    <RouterLink to="/t-shirt">T-Shirt</RouterLink>
    <RouterLink to="#">Sandal</RouterLink>
    <RouterLink to="#">Jacket</RouterLink>
  </div>
</template>

<style lang="scss">
.each-catalog-name {
  margin: 1rem 0;
}
</style>
