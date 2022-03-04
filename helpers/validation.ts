const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_MAX_LENGTH = 24;

export const validateEmail: (email: string) => boolean = (email: string) => {
  const regexp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  return regexp.test(email);
};

export const validatePassword = (password: string): boolean => {
  return passwordLengthIsValid(password);
};

const passwordLengthIsValid = (password: string): boolean => {
  if (password.length < PASSWORD_MIN_LENGTH) {
    return false;
  }
  if (password.length > PASSWORD_MAX_LENGTH) {
    return false;
  }
  return true;
};
