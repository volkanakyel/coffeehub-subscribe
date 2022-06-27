<template>
  <div class="navbar">
    <ul class="navbar__left">
      <li class="navbar__item">Home</li>
      <li class="navbar__item">About</li>
      <li class="navbar__item">Reservation</li>
    </ul>
    <div class="navbar__brand">
      <img class="navbar__logo" src="../assets/svg/logo.svg" alt="" />
    </div>
    <ul class="navbar__right">
      <li class="navbar__item">Pages</li>
      <li class="navbar__item">Shop</li>
      <li class="navbar__item">Contact</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss" scoped>
.navbar {
  max-width: 140rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  ul {
    list-style-type: none;
  }
  &__left {
    display: flex;
    gap: 4rem;
  }
  &__right {
    display: flex;
    gap: 4rem;
  }
}
</style>
