<template>
  <div class="container">
    <img src="../assets/img/coffee-cup.png" alt="" class="container__image-right" />
    <img src="../assets/img/coffee-machine.png" width="100" alt="" class="container__image-left" />
    <div class="coffee-form__header">
      <h1 class="coffee-form__title">Coffee plan</h1>
      <p class="coffee-form__description">Choose the plan that suits you</p>
    </div>
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.coffee {
  &__list {
    @media only screen and (max-width: 1000px) {
      &:last-child {
        margin-bottom: 2rem;
      }
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
}

.container {
  max-width: 120rem;
  min-height: 120vh;
  border-radius: 1rem;
  background-color: #c99e71;
  margin: 8rem auto;
  padding-top: 5rem;
  padding-bottom: 5rem;
  position: relative;

  @media only screen and (max-width: 1000px) {
    margin: 0 auto;
    padding-top: 2rem;
    min-height: 90vh;
  }

  &__image-right {
    @media only screen and (max-width: 1000px) {
      display: none;
    }

    position: absolute;
    top: 15rem;
    right: 2rem;
  }

  &__image-left {
    position: absolute;
    top: 35rem;
    left: 5rem;
    transform: rotate(10deg);

    @media only screen and (max-width: 1000px) {
      display: none;
    }
  }
}

.coffee-form {
  &__header {
    text-align: center;
  }

  &__title {
    font-size: 4.8rem;
  }

  &__description {
    font-size: 1.8rem;
  }
}
</style>
