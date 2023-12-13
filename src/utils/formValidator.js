export const isObjectEmpty = (coffeePlan) => Object.keys(coffeePlan).length !== 0;

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPassword = (password) => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  return passwordRegex.test(password);
};

export const isValidName = (name) => {
  const nameRegex = /^[a-zA-Z@]+(([',. -][a-zA-Z@ ])?[a-zA-Z@]*)*$/;
  return nameRegex.test(name);
};

export const checkFormValidity = (form) => {
  if (!isObjectEmpty(form)) return false;
  const isEmailValid = isValidEmail(form.email);
  const isPasswordValid = isValidPassword(form.password);
  const isNameValid = isValidName(form.name);
  return isEmailValid && isPasswordValid && isNameValid;
};

// eslint-disable-next-line quotes
export const checkAddressStr = (address) => address.includes(" ") && address.length > 2;
