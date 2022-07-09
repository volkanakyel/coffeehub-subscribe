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
    <img
      @click="toggleMobileMenu()"
      class="navbar__mobile-menu"
      src="../assets/svg/menu-icon.svg"
      alt=""
      width="30"
    />
    <div v-show="isMenuOpen" class="navbar__mobile-container">
      <ul class="navbar__mobile-tab">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
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
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
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
  position: relative;
  &__mobile-menu {
    display: none;
  }
  &__brand {
    display: flex;
  }
  &__right {
    list-style-type: none;
  }
  &__left {
    list-style-type: none;
    display: flex;
    gap: 4rem;
  }
  &__right {
    display: flex;
    gap: 4rem;
  }
  &__mobile-tab {
    display: none;
  }
  @media only screen and (max-width: 1000px) {
    padding-inline: 5rem;
    &__left {
      display: none;
    }
    &__right {
      display: none;
    }
    &__mobile-menu {
      display: block;
      justify-self: end;
    }

    &__mobile-container {
      position: absolute;
      top: 100%;
      right: 0;
      // transition: width 0.2s ease-in-out;
      width: 50%;
      background: black;
      z-index: 3433;
      text-align: right;
      padding: 4rem;
      ul {
        display: initial;
        list-style-type: none;
      }
    }
  }
}
</style>
