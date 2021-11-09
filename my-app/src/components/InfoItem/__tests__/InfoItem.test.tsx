import React from "react";
import { render, screen } from "@testing-library/react";

import { InfoItem } from "../InfoItem";

describe("InfoItem test suite", () => {
  test("should be render correctly", () => {
    const gender = "Male";
    const { container } = render(<InfoItem title="Gender" value={gender} />);
    expect(container).toHaveTextContent("Male");
  });
  test("should be render correctly with value = null", () => {
    const gender = null;
    const { container } = render(<InfoItem title="Gender" value={gender} />);
    expect(container).toHaveTextContent("unknown");
  });
});
