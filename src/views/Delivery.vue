<template>
  <div>
    <navbar />
    <CoffeeContainer :stepInfo="stepInfo">
      <UserDeliveryForm />
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

<script>
import Navbar from '@/components/Navbar.vue';
import CoffeeContainer from '@/components/CoffeeContainer.vue';
import UserDeliveryForm from '@/components/UserDeliveryForm.vue';

export default {
  name: 'Delivery',
  components: {
    Navbar,
    CoffeeContainer,
    UserDeliveryForm,
  },
  data() {
    return {
      currentStepNumber: 3,
      stepNumber: 4,
      isCoffeePlanMissing: false,
      hasSelectedPlan: true,
      stepInfo: {
        title: 'Delivery details',
        description: 'Where should we send your freshly roasted coffee beans?',
      },
    };
  },
  computed: {
    progress() {
      return (this.currentStepNumber / this.stepNumber) * 100;
    },
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
          this.$router.push('/confirmation');
        } else {
          this.isCoffeePlanMissing = true;
        }
      }
    },
    prev() {
      if (!(this.currentStepNumber <= 1)) {
        this.currentStepNumber -= 1;
        this.$router.back();
      }
    },
  },
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
