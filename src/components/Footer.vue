<template>
  <div class="neppo-footer-section">
    <div class="footer-content-list">
      <div class="footer-logo">
        <h1>Neppo</h1>
        <p>
          Specializes in providing high quality, luxury and branded products for
          your wardrobe
        </p>
      </div>

      <ul class="footer-catalog">
        <h3>Catalog</h3>
        <li>Hoodie</li>
        <li>T-Shirt</li>
        <li>Jacket</li>
        <li>Sandal</li>
      </ul>
      <ul class="footer-support">
        <h3>Support</h3>
        <li>FAQ</li>
        <li>Care Instruction</li>
        <li>Return Policy</li>
        <li>Promotion Terms & Conditions</li>
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
        <svg-icon type="mdi" :path="path"></svg-icon>
        <p>
          2023 Neppo. <RouterLink to="#">Terms of use</RouterLink> |
          <RouterLink to="#">Privacy Policy</RouterLink>
        </p>
      </div>
      <div class="footer-socials">
        <span class="icon-facebook"></span>
        <span class="icon-instagram"></span>
        <span class="icon-twitter"></span>
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
