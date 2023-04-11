<template>
  <div class="container">
    <img src="../assets/img/coffee-cup.png" alt="" class="container__image-right" />
    <img src="../assets/img/coffee-machine.png" width="100" alt="" class="container__image-left" />
    <div class="coffee-form__header">
      <h1 class="coffee-form__title">Coffee plan</h1>
      <p class="coffee-form__description">
        Choose the plan that suits you
      </p>
    </div>
    <div class="coffee-form">
      <div class="coffee-step">
        <div class="coffee__list" v-for="(category, index) in planCategories" :key="index">
          <CoffeeCard :availablePlan="category" @selectedPlan="getSelectedPlan" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CoffeeCard from '@/components/CoffeeCard.vue';
import { ref } from 'vue';

const emit = defineEmits(['planSelect']);

const planCategories = [
  {
    title: 'The single',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione molestiae dolores',
    quantity: 250,
    price: 19,
    selectedPlan: false,
    index: 0,
  },
  {
    title: 'The curious',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione molestiae dolores',
    quantity: 500,
    price: 29,
    selectedPlan: false,
    index: 1,
  },
  {
    title: 'The addict',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione molestiae dolores',
    quantity: 1000,
    price: 49,
    selectedPlan: false,
    index: 2,
  },
];
const isCoffeePlanMissing = ref(false);
const getSelectedPlan = (plan) => {
  isCoffeePlanMissing.value = false;
  planCategories.forEach((categories) => {
    // eslint-disable-next-line no-param-reassign
    categories.selectedPlan = false;
  });
  planCategories[plan.index].selectedPlan = true;
  emit('planSelected', plan);
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

.container {
  max-width: 120rem;
  min-height: 120vh;
  border-radius: 1rem;
  background-color: #C99E71;
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
