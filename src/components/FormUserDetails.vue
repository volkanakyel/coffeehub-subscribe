<template>
  <div class="container">
    <img src="../assets/img/coffee-cup.png" alt="" class="container__image-right" />
    <img src="../assets/img/coffee-machine.png" width="100" alt="" class="container__image-left" />
    <div class="coffee-form__header">
      <h1 class="coffee-form__title">Coffee plan</h1>
      <p class="coffee-form__description">Choose the plan that suits you</p>
    </div>
    <div class="user-container">
      <form @input="updateForm" class="user-form">
        <div class="form__group field">
          <input
            v-model="form.email"
            name="email"
            type="email"
            class="form__field"
            placeholder="your@email.com"
          />
          <label for="email" class="form__label">Email</label>
        </div>
        <div class="form__group field">
          <input
            v-model="form.password"
            type="password"
            class="form__field"
            placeholder="Password"
            autocomplete="on"
          />
          <label for="password" class="form__label">Password</label>
        </div>
        <div class="form__group field">
          <input
            v-model="form.name"
            type="input"
            class="form__field"
            placeholder="What should we call you"
          />
          <label for="name" class="form__label">Full Name</label>
        </div>
      </form>
      <div class="form__password">
        <p class="form__password-rules" :class="{ 'form__password-valid': validPasswordLength }">
          Password must be at least 6 characters long.
        </p>
        <p class="form__password-rules" :class="{ 'form__password-valid': validPasswordUppercase }">
          Password must contain at least one uppercase letter.
        </p>
        <p class="form__password-rules" :class="{ 'form__password-valid': validPasswordDigit }">
          Password must contain at least one digit.
        </p>
        <p
          class="form__password-rules"
          :class="{ 'form__password-valid': validPasswordDigitCharacter }"
        >
          Password must contain at least one special character (@, $, !, %, *, ?, &).
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, computed } from "vue";
import { checkFormValidity } from "@/utils/formValidator";

const emit = defineEmits(["update"]);

const form = ref({
  email: "",
  password: "",
  name: "",
});

const updateForm = () => {
  emit("update", { data: form, valid: checkFormValidity(form.value) });
};
const validPasswordUppercase = computed(() => /[A-Z]/.test(form.value.password));
const validPasswordLength = computed(() => form.value.password.length > 6);
const validPasswordDigit = computed(() => /\d/.test(form.value.password));
const validPasswordDigitCharacter = computed(() => /[@$!%*?&]/.test(form.value.password));
</script>
<script>
export default {
  name: "UserAccountForm",
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
.form__password {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.form__password-rules {
  margin-top: 12px;
}

.form__password-valid {
  color: green;
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
