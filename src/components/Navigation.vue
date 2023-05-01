<template>
  <div class="navigation">
    <div class="progress-bar">
      <div class="progress-bar__active" :style="`width: ${progress}%;`"></div>
    </div>
    <div class="button-actions">
      <button class="base-button" @click="prevStep">Back</button>
      <button class="base-button" @click="nextStep">Next</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed, defineEmits } from 'vue';

const props = defineProps({
  currentStepNumber: { type: Number },
  stepNumber: { type: Number, default: 4 },
  canGoNext: { type: Boolean, required: true }
});
const emit = defineEmits(['next', 'prev']);
const progress = computed(() => (props.currentStepNumber / props.stepNumber) * 100);

const prevStep = () => {
  emit('prev');
};
const nextStep = () => {
  emit('next');
};
</script>

<style lang="scss" scoped>
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
