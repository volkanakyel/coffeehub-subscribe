<template>
  <div class="form-container">
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
import { ref, computed } from 'vue';

import CoffeeListSection from '@/components/CoffeeListSection.vue';
import FormUserDetails from '@/components/FormUserDetails.vue';
import FormAddress from '@/components/FormAddress.vue';
import FormReviewOrder from '@/components/FormReviewOrder.vue';
import Navigation from '@/components/Navigation.vue';

const currentStepNumber = ref(1);
const canGoNext = ref(false);
const steps = [CoffeeListSection, FormUserDetails, FormAddress, FormReviewOrder];
const stepsLength = computed(() => steps.length);
const isLastStep = computed(() => currentStepNumber.value === steps.length);
const isFirstStep = computed(() => currentStepNumber.value <= 1);
const form = ref({
  plan: null,
  email: null,
  name: null,
  password: null,
  address: null,
  recipient: null,
  chocolate: false,
  selectedPlan: null,
  otherTreat: false
});
const processStep = (step) => {
  Object.assign(form.value, step.data);
  canGoNext.value = step.valid;
};
const nextStep = () => {
  if (!isLastStep.value) {
    currentStepNumber.value++;
  }
  canGoNext.value = false;
};
const previousStep = () => {
  if (!isFirstStep.value) {
    currentStepNumber.value--;
  }
};
</script>

<style lang="scss" scoped>
.form-container {
  position: relative;
}
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
