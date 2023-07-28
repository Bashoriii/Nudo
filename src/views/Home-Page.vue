<script setup>
import hero from '../components/home-section/Highlight-Hero.vue';
import featuredCard from '../components/Product-Card.vue';
import category from '../components/home-section/Categories.vue';
import newsLetter from '../components/home-section/News-Letter.vue';
import navHeader from '../components/Navbar.vue';
import footerContent from '../components/Footer.vue';
</script>

<template>
  <header>
    <navHeader />
  </header>

  <main>
    <!-- Hero Section -->
    <hero />
    <!-- Hero Section end -->

    <!-- Featured Products Section -->
    <div class="featured-products-container">
      <div class="featured-product-title">
        <h1>Featured Products</h1>
      </div>
      <!-- Component Card -->
      <featuredCard />
    </div>
    <!-- Featured Products Section end -->

    <!-- Neppo Profile Section -->
    <div class="neppo-profile-section">
      <div class="neppo-profile-image">
        <img
          src="../assets/images/sandals/highlight-sandal.png"
          class="profile-highlight"
          alt="sandal"
        />
      </div>
      <div class="neppo-profile-description">
        <div class="neppo-profile">
          <div class="profile-title">
            <h1>Neppo Project</h1>
          </div>
          <div class="profile-description">
            <p>
              At Neppo we are revolutionizing fashionable brand, delivering
              luxury and branded products. Focusing on detail and quality of
              every product made for men or women out there ready to wear.
            </p>
            <p>
              We provide a seamless online shopping experience where customers
              can easily navigate and order the products they want. Don't worry,
              we offer a guarantee to exchange the product you've purchased if
              it doesn't fit on you.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Neppo Profile Section end -->

    <!-- Category Section -->
    <category />
    <!-- Category Section end -->

    <!-- News Letter -->
    <newsLetter />
    <!-- News Letter end -->
  </main>

  <footer>
    <footerContent />
  </footer>
</template>
