import React from "react";
import { render, screen } from "@testing-library/react";
import { HeroImage } from "./HeroImage";

describe("HeroImage", () => {
  test("is visible", () => {
    render(<HeroImage title="Hero" imageUrl="x.jpg" />);
    expect(screen.getByText("Hero")).toBeVisible();
  });

  test("disabled changes overlay ::before background", () => {
    const { container } = render(
      <HeroImage
        title="Hero"
        imageUrl="x.jpg"
        disabled
        overlayColor="rgba(0,0,0,1)"
        disabledOverlayColor="rgba(204,204,204,1)"
      />
    );
    expect(container.firstChild).toHaveStyleRule(
      "background",
      "rgba(204,204,204,1)",
      { modifier: "::before" }
    );
  });
});