<template>
  <div
    :class="availablePlan.selectedPlan ? 'card__container--active' : 'card__container'"
    @click="handleClick(availablePlan)"
  >
    <div class="card__quantity">{{ getWeight(availablePlan.quantity) }}</div>
    <div class="card__description">
      <p class="card__title">{{ availablePlan.title }}</p>
      <p class="card__description">
        {{ availablePlan.description }}
      </p>
    </div>
    <p class="card__price">{{ availablePlan.price }}</p>
  </div>
</template>

<script>
import { CoffeeCategorie } from '@/interfaces/coffee';
import getWeight from '@/utils/getWeight';

export default {
  name: 'CoffeeCard',
  data() {
    return {
      getWeight,
    };
  },
  props: {
    availablePlan: {
      type: CoffeeCategorie,
      default: () => CoffeeCategorie,
    },
  },
  methods: {
    handleClick(selectedPlan) {
      this.$emit('selectedPlan', selectedPlan);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  &__container {
    cursor: pointer;
    position: relative;
    max-width: 65rem;
    box-shadow: $shadow-light;
    padding: 2rem;
    display: flex;
    align-items: center;
    border: 1px solid transparent;
    &--active {
      max-width: 65rem;
      padding: 2rem;
      display: flex;
      align-items: center;
      box-shadow: 0px -5px 20px 5px rgba(0, 0, 0, 0.2);
      border-radius: 0.5rem;
      border: 1px solid #fff;
    }
    &:hover {
      transform: translateY(-5px);
      transition: all 100ms;
      // box-shadow: 10px 15px 50px 0 rgba(0, 0, 0, 0.09);
    }
  }
  &__title {
    font-size: 1.8rem;
  }
  &__quantity {
    flex-basis: 25%;
    text-transform: capitalize;
    font-size: 3rem;
    margin-right: 2rem;
  }
  &__price {
    text-transform: capitalize;
    font-size: 3rem;
    margin-left: 3rem;
  }
}
</style>
