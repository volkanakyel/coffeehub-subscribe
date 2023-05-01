<template>
  <div class="container">
    <img src="../assets/img/coffee-cup.png" alt="" class="container__image-right" />
    <img src="../assets/img/coffee-machine.png" width="100" alt="" class="container__image-left" />
    <div class="coffee-form__header">
      <h1 class="coffee-form__title">Coffee plan</h1>
      <p class="coffee-form__description">Choose the plan that suits you</p>
    </div>
    <div class="coffee-form">
      <div class="coffee-step">
        <div class="coffee__list" v-for="category in planCategories" :key="category.index">
          <CoffeeCard :availablePlan="category" @selectedPlan="getSelectedPlan" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import planContent from '@/data/planContent';
import CoffeeCard from '@/components/CoffeeCard.vue';

const emit = defineEmits(['update']);

const planCategories = ref(planContent);

const getSelectedPlan = (id) => {
  // Select only one plan and deselect all when user has chosen
  planCategories.value.forEach((plan) => {
    plan.selectedPlan = false;
  });
  planCategories.value[id].selectedPlan = true;
  emit('update', { data: planCategories.value[id], valid: true });
};
</script>

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
