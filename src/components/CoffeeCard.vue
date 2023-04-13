<template>
  <div
    :class="props.availablePlan.selectedPlan ? 'card__container--active' : 'card__container'"
    @click="handleClick(props.availablePlan)"
  >
    <div class="card__quantity">{{ getWeight(props.availablePlan.quantity) }}</div>
    <div class="card__description">
      <p class="card__title">{{ props.availablePlan.title }}</p>
      <p class="card__description">
        {{ availablePlan.description }}
      </p>
    </div>
    <p class="card__price">{{ availablePlan.price }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import getWeight from '@/utils/getWeight';

const emit = defineEmits(['selectedPlan']);

const handleClick = (selectedPlan) => {
  emit('selectedPlan', selectedPlan);
};
const props = defineProps({
  availablePlan: Object
});
</script>
<script>
export default {
  name: 'CoffeeCard'
};
</script>

<style lang="scss" scoped>
.card {
  &__container {
    cursor: pointer;
    position: relative;
    max-width: 65rem;
    box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
    padding: 2rem;
    display: flex;
    align-items: center;
    margin: 0 auto;
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
