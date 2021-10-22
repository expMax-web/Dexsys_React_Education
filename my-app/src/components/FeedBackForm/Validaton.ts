export const validateEmail = (value: string): boolean | string => {
  const regExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const invalidEmail =
    "Поле должно содержать символы '@' и '.', согласно шаблону";
  const empyField = "Поле обязательно для заполнения";
  if (value === "" || !value) {
    return empyField;
  }
  if (!regExp.test(value)) {
    return invalidEmail;
  }

  return true;
};

export const validateFio = (value: string): boolean | string => {
  const regExp = /^[а-я\s-]+$/;
  const invalidEmail =
    "Поле должно содержать символы '@' и '.', согласно шаблону";
  const empyField = "Поле обязательно для заполнения";
  if (value === "" || !value) {
    return empyField;
  }
  if (!regExp.test(value)) {
    return invalidEmail;
  }

  return true;
};
