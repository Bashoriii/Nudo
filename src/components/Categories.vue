<template>
  <div class="neppo-categories-section">
    <div class="category-title">
      <h1>Category</h1>
    </div>
    <div class="category-container">
      <div class="category-list">
        <div v-for="i in 4" :key="i" class="category-item">
          <img
            src="../assets/images/hoodies/orange-crewneck.png"
            alt="hoodie"
          />
          <h1 class="category-name">Hoodie</h1>
        </div>
      </div>
      <div class="category-poster">
        <img
          src="../assets/images/voucher-discount.jpeg"
          class=""
          alt="poster"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
