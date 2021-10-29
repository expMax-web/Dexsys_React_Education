import { validateEmail, validateFio } from "./Validaton";
import { ERROR_MESSAGES } from "../Constants";

describe("validateFio function tests", () => {
  test("should return true", () => {
    expect(validateFio("Иванов Иван Иванович")).toBe(true);
    expect(validateFio("Иванов-Смирнов Иван Иванович")).toBe(true);
  });
  test("should return ERROR_MESSAGES", () => {
    expect(validateFio("Иванов")).toBe(ERROR_MESSAGES.InvalidFio);
    expect(validateFio("Иванов Иван")).toBe(ERROR_MESSAGES.InvalidFio);
    expect(validateFio("Иванов Иван Ivanovich")).toBe(
      ERROR_MESSAGES.InvalidFio
    );
  });
});

describe("validateEmail function tests", () => {
  test("should return true", () => {
    expect(validateEmail("example@gmail.com")).toBe(true);
  });
  test("should return undefined", () => {
    expect(validateEmail("examplegmail.com")).toBe(ERROR_MESSAGES.InvalidEmail);
    expect(validateEmail("example@gmailcom")).toBe(ERROR_MESSAGES.InvalidEmail);
    expect(validateEmail("example@gmail.")).toBe(ERROR_MESSAGES.InvalidEmail);
    expect(validateEmail("@gmail.com")).toBe(ERROR_MESSAGES.InvalidEmail);
    expect(validateEmail("example@.com")).toBe(ERROR_MESSAGES.InvalidEmail);
  });
});
