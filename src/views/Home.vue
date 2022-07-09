<template>
  <div>
    <navbar />
    <CoffeeContainer :stepInfo="stepInfo">
      <div>
        <select-coffee-plan @planSelected="selectedPlan()" />
        <div v-if="isCoffeePlanMissing" class="warning-banner">
          <img src="../assets/svg/info-icon.svg" alt="warning" height="20" width="20" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim unde deserunt iste.
        </div>
      </div>

      <div class="navigation">
        <div class="progress-bar">
          <div class="progress-bar__active" :style="`width: ${progress}%;`"></div>
        </div>
        <div class="button-actions">
          <button class="base-button" @click="prev()">Back</button>
          <button class="base-button" @click="next()">Next</button>
        </div>
      </div>
    </CoffeeContainer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import CoffeeContainer from '@/components/CoffeeContainer.vue';
import SelectCoffeePlan from '@/components/SelectCoffeePlan.vue';

export default Vue.extend({
  components: { Navbar, CoffeeContainer, SelectCoffeePlan },
  data() {
    return {
      currentStepNumber: 1,
      stepNumber: 4,
      isCoffeePlanMissing: false,
      hasSelectedPlan: false,
      stepInfo: {
        title: 'Choose your Plan',
        description: 'We travel the word to source the very best single origin coffee for you',
      },
    };
  },
  methods: {
    selectedPlan() {
      this.hasSelectedPlan = true;
      this.isCoffeePlanMissing = false;
    },
    next() {
      if (!(this.currentStepNumber >= this.stepNumber)) {
        if (this.hasSelectedPlan) {
          this.currentStepNumber += 1;
          this.$router.push({
            name: 'Account',
            params: { info: this.stepInfo },
          });
        } else {
          this.isCoffeePlanMissing = true;
        }
      }
    },
    prev() {
      if (!(this.currentStepNumber <= 1)) {
        this.currentStepNumber -= 1;
      }
    },
  },
  computed: {
    progress(): number {
      return (this.currentStepNumber / this.stepNumber) * 100;
    },
  },
});
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

.warning-banner {
  display: flex;
  justify-content: center;
  gap: 2rem;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  padding: 1rem;
  max-width: 65rem;
  border-radius: 2rem;
  color: $primary;
}

.button-actions {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 3rem;
}
</style>
