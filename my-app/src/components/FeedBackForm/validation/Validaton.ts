import { REGEXP, ERROR_MESSAGES } from "../Constants";

export const validateEmail = (value: string): boolean | string => {
  if (value === "" || !value) {
    return ERROR_MESSAGES.EmptyField;
  }
  if (!REGEXP.Email.test(value)) {
    return ERROR_MESSAGES.InvalidEmail;
  }

  return true;
};

export const validateFio = (value: string): boolean | string => {
  if (value === "" || !value) {
    return ERROR_MESSAGES.EmptyField;
  }
  if (!REGEXP.Fio.test(value)) {
    return ERROR_MESSAGES.InvalidFio;
  }

  return true;
};
