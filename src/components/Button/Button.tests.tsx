import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("is visible", () => {
    render(<Button label="Hello" />);
    expect(screen.getByRole("button", { name: "Hello" })).toBeVisible();
  });

  test("changes background and cursor when disabled", () => {
    const { container } = render(
      <Button
        label="Disabled"
        disabled
        backgroundColor="#000000"
        disabledBackgroundColor="#cccccc"
      />
    );
    expect(container.firstChild).toHaveStyleRule("background", "#cccccc");
    expect(container.firstChild).toHaveStyleRule("cursor", "not-allowed");
  });
});