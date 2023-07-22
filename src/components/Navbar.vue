<template>
  <nav class="neppo-main-nav">
    <div class="neppo-logo">
      <h1>Neppo</h1>
    </div>
    <div class="neppo-nav-list">
      <RouterLink to="#" v-for="nav in navbar" :key="nav" class="nav-item">
        {{ nav }}
      </RouterLink>
    </div>
    <div class="neppo-nav-icons">
      <div class="search-box">
        <div class="search-icon icons">
          <svg-icon type="mdi" :path="path"></svg-icon>
        </div>
        <div class="search-input">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div class="cart-box icons">
        <svg-icon type="mdi" :path="mdiCart"></svg-icon>
      </div>
      <div class="login-box icons">
        <svg-icon type="mdi" :path="mdiAccount"></svg-icon>
      </div>
    </div>
  </nav>
</template>

<script>
// Import icons
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMagnify, mdiCart, mdiAccount } from '@mdi/js';

export default {
  name: 'mdi-icons',

  components: {
    SvgIcon,
  },
  data() {
    return {
      navbar: ['Home', 'About', 'Contact'],

      // Icon names
      path: mdiMagnify,
      mdiCart,
      mdiAccount,
    };
  },
};
</script>

<style lang="scss" scoped></style>
