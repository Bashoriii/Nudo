<script>
// Import icons
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMagnify, mdiCart, mdiAccount } from '@mdi/js';

export default {
  components: {
    SvgIcon,
  },
  data() {
    return {
      ref: null,

      // Icon names
      path: mdiMagnify,
      mdiCart,
      mdiAccount,
    };
  },
};
</script>

<template>
  <nav class="neppo-main-nav">
    <div class="neppo-logo">
      <RouterLink to="/">Neppo</RouterLink>
    </div>
    <div class="neppo-nav-list">
      <RouterLink to="/hoodie" class="nav-item"> Catalog </RouterLink>
      <RouterLink to="/about" class="nav-item"> About </RouterLink>
      <RouterLink to="/testing" class="nav-item"> Test </RouterLink>
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
