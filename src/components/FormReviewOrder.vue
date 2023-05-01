<template>
  <div class="container">
    <img src="../assets/img/coffee-cup.png" alt="" class="container__image-right" />
    <img src="../assets/img/coffee-machine.png" width="100" alt="" class="container__image-left" />
    <div class="coffee-form__header">
      <h1 class="coffee-form__title">Coffee plan</h1>
      <p class="coffee-form__description">Choose the plan that suits you</p>
    </div>
    <div class="confirmation">
      <h2>Subscription</h2>
      <p>We'll send you carefully selected coffee every month</p>
      <div class="confirmation__offer">
        <CoffeeCard :availablePlan="props.selectedPlan" />
      </div>
      <h2>Level up your box</h2>
      <p>Treat yourself by levelling up your monthly package</p>
      <div class="confirmation__additional">
        <div class="form__group field">
          <input type="checkbox" class="form__field" />
          <label for="name" class="form__label">4pcs. Single Origin Chocolate (+4$/Month)</label>
        </div>
        <div class="form__group field">
          <input type="checkbox" class="form__field" />
          <label for="name" class="form__label">Another Delicious treat (+2$/Month)</label>
        </div>
      </div>
      <div class="confirmation__details">
        <div class="confirmation__delivery">
          <p>Delivery</p>
          <p>Your first liquid Gold Box is right around the corner</p>
        </div>
        <div class="confirmation__recipient">
          <p>Recipient</p>
          <p>Address</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import CoffeeCard from './CoffeeCard.vue';

const props = defineProps(['selectedPlan']);
</script>
<script>
export default {
  name: 'Confirmation',
  components: { CoffeeCard }
};
</script>

<style lang="scss" scoped>
.confirmation {
  max-width: 600px;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  padding: 24px;
  border-radius: 12px;
  margin: 50px auto;
  &__offer {
    margin: 40px auto;
  }
  &__details {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
