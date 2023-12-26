<template>
  <div class="news-letter-section section">
    <div class="news-letter-title">
      <h1>
        Subscribe to our newsletter and get 10% discount on the first order!
      </h1>
    </div>
    <div class="news-letter-input">
      <input type="text" placeholder="E-mail" class="input-email" />
      <RouterLink to="#">
        <svg-icon class="news-letter-arrow" type="mdi" :path="path"></svg-icon>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiArrowRight } from '@mdi/js';

export default {
  name: 'my-component',
  components: {
    SvgIcon,
  },
  data() {
    return {
      path: mdiArrowRight,
    };
  },
};
</script>
