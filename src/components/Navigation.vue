<template>
  <div class="navigation">
    <div class="progress-bar">
      <div class="progress-bar__active" :style="`width: ${progress}%;`"></div>
    </div>
    <div class="button-actions">
      <button class="base-button" @click="prev()">Back</button>
      <button class="base-button" @click="next()">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style lang="scss" scoped>
.navigation {
  max-width: 80rem;
  margin: 15rem auto 0 auto;
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
