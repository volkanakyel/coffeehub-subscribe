<template>
  <FormPlanPicker>
    <CoffeeListSection v-if="currentStepNumber === 1" @planSelected="selectedCoffeePlan" />
    <FormUserDetails v-if="currentStepNumber === 2" @updateForm="updateFormUserDetails" />
    <FormAddress v-if="currentStepNumber === 3" @updateAddress="updateFormAddress" />
    <FormReviewOrder v-if="currentStepNumber === 4" :selectedPlan="selectedPlan" />
    <Navigation
      @prev="previousStep"
      @next="nextStep"
      :currentStepNumber="currentStepNumber"
      :stepNumber="stepNumber"
    />
  </FormPlanPicker>
</template>

<script setup>
import { ref, reactive } from 'vue';
import FormPlanPicker from '@/components/FormPlanPicker.vue';
import CoffeeListSection from '@/components/CoffeeListSection.vue';
import FormUserDetails from '@/components/FormUserDetails.vue';
import FormAddress from '@/components/FormAddress.vue';
import FormReviewOrder from '@/components/FormReviewOrder.vue';
import Navigation from './Navigation.vue';

const currentStepNumber = ref(1);
const stepNumber = 4;
const nextStep = () => {
  currentStepNumber.value++;
};
const previousStep = () => {
  currentStepNumber.value--;
};

const selectedPlan = reactive({});
const selectedCoffeePlan = (plan) => {
  Object.assign(selectedPlan, plan);
};

const userFormDetails = reactive({});
const updateFormUserDetails = (form) => {
  Object.assign(userFormDetails, form);
};

const userFormAddress = reactive({});
const updateFormAddress = (formAddress) => {
  Object.assign(userFormAddress, formAddress);
};
</script>

<style lang="scss" scoped>
.navigation {
  position: absolute;
  width: 80rem;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 1000px) {
    width: 40rem;
  }
}
</style>
