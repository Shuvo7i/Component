import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  test("is visible", () => {
    render(<Card title="T" body="B" />);
    expect(screen.getByText("T")).toBeVisible();
    expect(screen.getByText("B")).toBeVisible();
  });

  test("disabled changes background and cursor", () => {
    const { container } = render(
      <Card title="T" body="B" disabled disabledBackgroundColor="#cccccc" />,
    );
    expect(container.firstChild).toHaveStyleRule("background", "#cccccc");
    expect(container.firstChild).toHaveStyleRule("cursor", "not-allowed");
  });
});
