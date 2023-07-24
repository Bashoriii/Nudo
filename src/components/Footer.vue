<template>
  <div class="neppo-footer-section">
    <div class="footer-content-list">
      <div class="footer-logo">
        <RouterLink to="#">Neppo</RouterLink>
        <p>
          Specializes in providing high quality, luxury and branded products for
          your wardrobe
        </p>
      </div>

      <ul class="footer-catalog">
        <h3>Catalog</h3>
        <li><RouterLink to="#">Hoodie</RouterLink></li>
        <li><RouterLink to="#">T-Shirt</RouterLink></li>
        <li><RouterLink to="#">Jacket</RouterLink></li>
        <li><RouterLink to="#">Sandal</RouterLink></li>
      </ul>
      <ul class="footer-support">
        <h3>Support</h3>
        <li><RouterLink to="#">FAQ</RouterLink></li>
        <li><RouterLink to="#">Care Instruction</RouterLink></li>
        <li><RouterLink to="#">Return Policy</RouterLink></li>
        <li><RouterLink to="#">Promotion</RouterLink></li>
      </ul>
      <ul class="footer-payment-methods">
        <h3>Payment Methods</h3>
        <div class="payment-methods-icon">
          <li><img src="../assets/images/icon/mastercard.png" alt="" /></li>
          <li>
            <img src="../assets/images/icon/visa-credit-card.png" alt="" />
          </li>
          <li><img src="../assets/images/icon/paypal.png" alt="" /></li>
        </div>
      </ul>
    </div>
    <div class="footer-content-socials">
      <div class="footer-policy">
        <svg-icon
          class="footer-copyright-icon"
          type="mdi"
          :path="path"
        ></svg-icon>
        <p>
          2023 Neppo.
          <RouterLink to="#" class="footer-terms-of-use">
            Terms of use</RouterLink
          >
          |
          <RouterLink to="#" class="footer-privacy-policy">
            Privacy Policy</RouterLink
          >
        </p>
      </div>
      <div class="footer-socials">
        <RouterLink to="#facebook">
          <span class="icon-facebook"></span
        ></RouterLink>
        <RouterLink to="#instagram">
          <span class="icon-instagram"></span
        ></RouterLink>
        <RouterLink to="#twitter">
          <span class="icon-twitter"></span
        ></RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCopyright } from '@mdi/js';

export default {
  name: 'my-component',
  components: {
    SvgIcon,
  },
  data() {
    return {
      path: mdiCopyright,
    };
  },
};
</script>
