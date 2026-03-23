import React from "react";
import { render, screen } from "@testing-library/react";
import { Dropdown } from "./Dropdown";

describe("Dropdown", () => {
  test("is visible", () => {
    render(<Dropdown label="Pick" options={[{ label: "A", value: "a" }]} />);
    expect(screen.getByLabelText("Pick")).toBeVisible();
  });

  test("disabled changes background and cursor", () => {
    const { container } = render(
      <Dropdown
        label="Pick"
        options={[{ label: "A", value: "a" }]}
        disabled
        disabledBackgroundColor="#cccccc"
      />,
    );
    const select = container.querySelector("select");
    expect(select as HTMLElement).toHaveStyleRule("background", "#cccccc");
    expect(select as HTMLElement).toHaveStyleRule("cursor", "not-allowed");
  });
});
