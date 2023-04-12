<template>
  <div class="user-container">
    <form class="user-form">
      <div class="form__group field">
        <input name="email" type="email" class="form__field" placeholder="Email" />
        <label for="email" class="form__label">Email</label>
      </div>
      <div class="form__group field">
        <input type="password" class="form__field" placeholder="Password" />
        <label for="password" class="form__label">Password</label>
      </div>
      <div class="form__group field">
        <input type="input" class="form__field" placeholder="Name" />
        <label for="name" class="form__label">Name</label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserAccountForm',
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
