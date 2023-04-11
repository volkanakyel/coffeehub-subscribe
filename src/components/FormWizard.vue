<template>
  <FormPlanPicker />
  <div class="navigation">
    <div class="progress-bar">
      <div class="progress-bar__active" :style="`width: ${progress}%;`"></div>
    </div>
    <div class="button-actions">
      <button class="base-button">Back</button>
      <button class="base-button">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import FormPlanPicker from '@/components/FormPlanPicker.vue';

const currentStepNumber = ref(1);
const stepNumber = 4;
const progress = computed(() => (currentStepNumber.value / stepNumber) * 100);
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

.progress-bar {
  border-radius: 9999px;
  position: relative;
  height: 12px;
  background-color: #c6c6c6;

  &__active {
    border-radius: 9999px;
    position: absolute;
    height: 100%;
    background-color: $primary;
    transition: all 0.3s ease;
  }
}

.button-actions {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 3rem;
}
</style>
