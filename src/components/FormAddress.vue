<template>
  <div class="container">
    <img src="../assets/img/coffee-cup.png" alt="" class="container__image-right" />
    <img src="../assets/img/coffee-machine.png" width="100" alt="" class="container__image-left" />
    <div class="coffee-form__header">
      <h1 class="coffee-form__title">Coffee plan</h1>
      <p class="coffee-form__description">Choose the plan that suits you</p>
    </div>
    <div class="user-container">
      <form @input="updateAddress" class="user-form">
        <div class="form__group field">
          <input
            v-model="formAddress.name"
            type="text"
            class="form__field"
            placeholder="Your name"
          />
          <label for="name" class="form__label">Name</label>
        </div>
        <div class="form__group field">
          <input
            v-model="formAddress.address"
            type="address"
            class="form__field"
            placeholder="Address"
          />
          <label for="address" class="form__label">Adress</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, defineEmits } from 'vue';

const emit = defineEmits(['updateAddress']);
const formAddress = reactive({
  address: '',
  name: ''
});

const updateAddress = () => {
  emit('update', { data: formAddress, valid: true });
};
</script>

<script>
export default {
  name: 'UserDeliveryForm'
};
</script>

<style lang="scss" scoped>
.user-form {
  display: flex;
  gap: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.form__group {
  position: relative;
  padding: 2rem 0 0;
  margin-top: 10px;
  width: 40rem;
}

.form__field {
  width: 100%;
  border: 0;
  border-bottom: 2px solid $primary;
  outline: 0;
  color: #fff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    cursor: text;
    top: 20px;
  }
}
.form__field:valid {
  background-color: transparent;
}
.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  color: $primary;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    color: $primary;
    font-weight: 700;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary, $secondary);
  border-image-slice: 1;
}
/* reset input */
.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}
</style>
