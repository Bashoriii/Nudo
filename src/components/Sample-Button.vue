<template>
  <div class="sample-button">
    <button>
      <slot />
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sample-button {
  width: 100px;
  height: auto;

  button {
    widows: 100%;
    height: auto;
    background-color: blue;
  }
}
</style>
