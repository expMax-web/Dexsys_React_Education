import { getFormatedDate } from "./getFormatedDate";

describe("getFormatedDate function tests", () => {
  test("should return DD/MM/YYYY", () => {
    expect(getFormatedDate("2017-11-04T19:59:20.523Z")).toBe("4.10.2017");
    expect(getFormatedDate("2017-11-18T19:33:01.173Z")).toBe("18.10.2017");
    expect(getFormatedDate("2017-11-10T13:08:20.569Z")).toBe("10.10.2017");
  });
  test("should return undefined", () => {
    expect(getFormatedDate(null)).toBe(undefined);
    expect(getFormatedDate(undefined)).toBe(undefined);
    expect(getFormatedDate("InvalideDate")).toBe(undefined);
  });
});
