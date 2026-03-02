import React from "react";
import { render, screen } from "@testing-library/react";
import { RadioButton } from "./RadioButton";

describe("RadioButton", () => {
  test("is visible", () => {
    render(<RadioButton name="x" label="Radio" />);
    expect(screen.getByLabelText("Radio")).toBeVisible();
  });

  test("disabled changes accent-color and cursor", () => {
    const { container } = render(
      <RadioButton
        name="x"
        label="Radio"
        disabled
        accentColor="#000000"
        disabledAccentColor="#cccccc"
      />
    );
    const input = container.querySelector("input");
    expect(input as HTMLElement).toHaveStyleRule("accent-color", "#cccccc");
    expect(input as HTMLElement).toHaveStyleRule("cursor", "not-allowed");
  });
});