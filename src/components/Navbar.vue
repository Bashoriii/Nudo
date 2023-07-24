<template>
  <nav class="neppo-main-nav">
    <div class="neppo-logo">
      <RouterLink to="#">Neppo</RouterLink>
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
      <RouterLink to="#" class="cart-box icons">
        <svg-icon type="mdi" :path="mdiCart"></svg-icon>
      </RouterLink>
      <RouterLink to="#" class="login-box icons">
        <svg-icon type="mdi" :path="mdiAccount"></svg-icon>
      </RouterLink>
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
