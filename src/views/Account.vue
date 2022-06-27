<template>
  <div>
    <navbar />
    <CoffeeContainer :stepInfo="stepInfo">
      <UserAccountForm />
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
import UserAccountForm from '@/components/UserAccountForm.vue';

export default {
  name: 'Account',
  components: {
    Navbar,
    CoffeeContainer,
    UserAccountForm,
  },
  data() {
    return {
      currentStepNumber: 2,
      stepNumber: 4,
      isCoffeePlanMissing: false,
      hasSelectedPlan: true,
      stepInfo: {
        title: 'Create Account',
        description: 'Create an account or log in to order your liquid gold subscription',
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
          this.$router.push('/delivery');
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
  computed: {
    progress() {
      return (this.currentStepNumber / this.stepNumber) * 100;
    },
  },
  created() {
    console.log(this.$route.params.info);
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
  justify-content: flex-end;
  gap: 3rem;
}
</style>
