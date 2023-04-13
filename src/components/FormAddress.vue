<template>
  <div class="user-container">
    <form class="user-form">
      <div class="form__group field">
        <input type="text" class="form__field" placeholder="Adress" />
        <label for="name" class="form__label">Name</label>
      </div>
      <div class="form__group field">
        <input type="adress" class="form__field" placeholder="Adress" />
        <label for="adress" class="form__label">Adress</label>
      </div>
    </form>
  </div>
</template>

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
