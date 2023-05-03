<template>
  <div>
    <KeepAlive>
      <component
        ref="currentStep"
        :is="steps[currentStepNumber - 1]"
        @update="processStep"
        :wizardData="form"
      ></component>
    </KeepAlive>
    <Navigation
      @prev="previousStep"
      @next="nextStep"
      :currentStepNumber="currentStepNumber"
      :stepNumber="stepsLength"
      :canGoNext="canGoNext"
    />
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

import CoffeeListSection from '@/components/CoffeeListSection.vue';
import FormUserDetails from '@/components/FormUserDetails.vue';
import FormAddress from '@/components/FormAddress.vue';
import FormReviewOrder from '@/components/FormReviewOrder.vue';
import Navigation from '@/components/Navigation.vue';

const currentStepNumber = ref(1);
const canGoNext = ref(false);
const nextStep = () => {
  currentStepNumber.value++;
  canGoNext.value = false;
};
const previousStep = () => {
  currentStepNumber.value--;
};
const steps = [CoffeeListSection, FormUserDetails, FormAddress, FormReviewOrder];
const stepsLength = computed(() => steps.length);
const form = ref({
  plan: null,
  email: null,
  name: null,
  password: null,
  address: null,
  recipient: null,
  chocolate: false,
  otherTreat: false
});
const processStep = (step) => {
  Object.assign(form.value, step.data);
  canGoNext.value = step.valid;
};

const selectedPlan = reactive({});
const selectedCoffeePlan = (plan) => {
  Object.assign(selectedPlan, plan);
  canGoNext.value = true;
};

const userFormDetails = reactive({});
const updateFormUserDetails = (form) => {
  Object.assign(userFormDetails, form);
  canGoNext.value = true;
};

const userFormAddress = reactive({});
const updateFormAddress = (formAddress) => {
  Object.assign(userFormAddress, formAddress);
  canGoNext.value = true;
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
