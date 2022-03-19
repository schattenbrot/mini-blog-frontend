const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_MAX_LENGTH = 24;
const TITLE_MIN_LENGTH = 3;
const TITLE_MAX_LENGTH = 40;
const TEXT_MIN_LENGTH = 5;
const TEXT_MAX_LENGTH = 700;
const USER_MIN_LENGTH = 3;
const USERNAME_MAX_LENGTH = 20;

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

export const validateTitle = (title: string): boolean => {
  if (title.length < TITLE_MIN_LENGTH) {
    return false;
  }
  if (title.length > TITLE_MAX_LENGTH) {
    return false;
  }
  return true;
};

export const validateText = (text: string): boolean => {
  if (text.length < TEXT_MIN_LENGTH) {
    return false;
  }
  if (text.length > TEXT_MAX_LENGTH) {
    return false;
  }
  return true;
};

export const validateUsername = (username: string): boolean => {
  if (username.length < USER_MIN_LENGTH) {
    return false;
  }
  if (username.length > USERNAME_MAX_LENGTH) {
    return false;
  }
  return true;
};
