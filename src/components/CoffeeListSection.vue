<template>
  <div class="container">
    <img src="../assets/img/coffee-cup.png" alt="" class="container__image-right" />
    <img src="../assets/img/coffee-machine.png" width="100" alt="" class="container__image-left" />
    <div class="coffee-list__header">
      <h1 class="coffee-list__title">Coffee plan</h1>
      <p class="coffee-list__description">Choose the plan that suits you</p>
    </div>
    <div class="coffee-list__plans">
      <CoffeeCard v-for="category in planCategories" :key="category.index"
      :availablePlan="category" @selectedPlan="getSelectedPlan" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import planContent from '@/data/planContent';
import CoffeeCard from '@/components/CoffeeCard.vue';
import { isObjectEmpty } from '@/utils/formValidator';

const emit = defineEmits(['update']);

const planCategories = ref(planContent);

const getSelectedPlan = (id) => {
  // Select only one plan and deselect all when user has chosen
  planCategories.value.forEach((plan) => {
    plan.selectedPlan = false;
  });
  planCategories.value[id].selectedPlan = true;
  const selectedPlan = planCategories.value[id];
  emit('update', {
    data: { plan: planCategories.value[id] },
    valid: isObjectEmpty(selectedPlan)
  });
};
</script>

<style lang="scss" scoped>

.coffee-list {
  &__header {
    text-align: center;
  }

  &__title {
    font-size: 4.8rem;
  }

  &__description {
    font-size: 1.8rem;
  }

  &__plans {
    @media only screen and (max-width: 1000px) {
      &:last-child {
        margin-bottom: 2rem;
      }
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    max-width: 70rem;
    padding: 0 2rem;
    margin: 5rem auto;
  }
}
</style>
