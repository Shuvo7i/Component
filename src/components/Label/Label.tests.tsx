import React from "react";
import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

describe("Label", () => {
  test("is visible", () => {
    render(<Label text="My Label" />);
    expect(screen.getByText("My Label")).toBeVisible();
  });

  test("disabled changes color and cursor", () => {
    const { container } = render(
      <Label text="X" disabled disabledColor="#cccccc" />,
    );
    expect(container.firstChild).toHaveStyleRule("color", "#cccccc");
    expect(container.firstChild).toHaveStyleRule("cursor", "not-allowed");
  });
});
