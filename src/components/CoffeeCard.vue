<template>
  <div
    :class="{ 'card__container--active': props.availablePlan.selectedPlan }"
    class="card__container"
    @click="handleClick(props.availablePlan.index)"
  >
    <div class="card__quantity">{{ getWeight(props.availablePlan.quantity) }}</div>
    <div class="card__description">
      <p class="card__title">{{ props.availablePlan.title }}</p>
      <p class="card__description">
        {{ availablePlan.description }}
      </p>
    </div>
    <p class="card__price">{{ props.availablePlan.price }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import getWeight from '@/utils/getWeight';

const emit = defineEmits(['selectedPlan']);

const handleClick = (index) => {
  emit('selectedPlan', index);
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
