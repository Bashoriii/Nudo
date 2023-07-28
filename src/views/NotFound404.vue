<template>
  <div class="page-not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>
      The page you are looking for doesn't exist or an other error occured. Go
      to <RouterLink to="/">Home Page</RouterLink>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page-not-found {
  text-align: center;

  h1 {
    font-size: 8rem;
  }

  h2 {
    font-size: 4rem;
  }

  p {
    font-size: 2rem;
    margin-top: 2rem;

    a {
      text-decoration: underline;
      color: #3366cc;
    }
  }
}
</style>
