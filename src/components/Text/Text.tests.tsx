import React from "react";
import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text", () => {
  test("is visible", () => {
    render(<Text value="Visible text" />);
    expect(screen.getByText("Visible text")).toBeVisible();
  });

  test("disabled changes color and cursor", () => {
    const { container } = render(
      <Text value="X" disabled disabledColor="#cccccc" />
    );
    expect(container.firstChild).toHaveStyleRule("color", "#cccccc");
    expect(container.firstChild).toHaveStyleRule("cursor", "not-allowed");
  });
});