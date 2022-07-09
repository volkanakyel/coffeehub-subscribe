<template>
  <div class="coffee-form">
    <div class="coffee-step">
      <div class="coffee__list" v-for="(categorie, index) in planCategories" :key="index">
        <coffee-card :availablePlan="categorie" @selectedPlan="getSelectedPlan" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { CoffeeCategorie as CoffeeCategories } from '@/interfaces/coffee';
import CoffeeCard from './Coffee-Card.vue';

export default {
  name: 'SelectCoffeePlan',
  components: {
    CoffeeCard,
  },
  data() {
    return {
      currentStepNumber: 1,
      stepNumber: 4,
      isCoffeePlanMissing: false,
      planCategories: [
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
      ],
    };
  },
  computed: {
    hasSelectedPlan(): boolean {
      return (this as any).planCategories.some(
        // eslint-disable-next-line comma-dangle
        (categories: { selectedPlan: unknown }) => categories.selectedPlan
      );
    },
    progress(): number {
      return ((this as any).currentStepNumber / (this as any).stepNumber) * 100;
    },
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    getSelectedPlan(plan: CoffeeCategories) {
      (this as any).isCoffeePlanMissing = false;
      (this as any).planCategories.forEach((categories: { selectedPlan: boolean }) => {
        // eslint-disable-next-line no-param-reassign
        categories.selectedPlan = false;
      });
      (this as any).planCategories[plan.index].selectedPlan = true;
      (this as any).$emit('planSelected', plan);
    },
  },
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
</style>
