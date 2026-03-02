import React from "react";
import { render, screen } from "@testing-library/react";
import { Img } from "./Img";

describe("Img", () => {
  test("is visible", () => {
    render(<Img src="x.png" alt="Example" />);
    expect(screen.getByAltText("Example")).toBeVisible();
  });

  test("disabled changes opacity and cursor", () => {
    const { container } = render(
      <Img src="x.png" alt="Example" disabled disabledOpacity={0.25} />
    );
    expect(container.firstChild).toHaveStyleRule("opacity", "0.25");
    expect(container.firstChild).toHaveStyleRule("cursor", "not-allowed");
  });
});