<template>
  <div class="container">
    <img src="../assets/img/coffee-cup.png" alt="" class="container__image-right" />
    <img src="../assets/img/coffee-machine.png" width="100" alt="" class="container__image-left" />
    <div class="coffee-form__header">
      <h1 class="coffee-form__title">{{ stepInfo.title }}</h1>
      <p class="coffee-form__description">
        {{ stepInfo.description }}
      </p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CoffeePlanContainer',
  props: {
    stepInfo: {
      type: Object,
      default: () => ({
        title: 'Coffee plan',
        description: 'Choose the plan that suits you',
      }),
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 120rem;
  min-height: 120vh;
  border-radius: 1rem;
  background-color: $secondary;
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
