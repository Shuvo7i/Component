import React from "react";
import { render, screen } from "@testing-library/react";
import { Table } from "./Table";
import { TableHeader } from "./TableHeader";

describe("Table", () => {
  test("is visible", () => {
    render(
      <Table>
        <TableHeader>
          <tr><th>Header</th></tr>
        </TableHeader>
        <tbody>
          <tr><td>Cell</td></tr>
        </tbody>
      </Table>
    );
    expect(screen.getByRole("table")).toBeVisible();
    expect(screen.getByText("Header")).toBeVisible();
  });

  test("background changes when disabled", () => {
    const { container } = render(
      <Table disabled disabledBackgroundColor="#cccccc">
        <tbody><tr><td>Cell</td></tr></tbody>
      </Table>
    );
    // Table is inside Wrap: container.firstChild is Wrap, table is inside it.
    const table = container.querySelector("table");
    expect(table).toBeTruthy();
    expect(table as HTMLElement).toHaveStyleRule("background", "#cccccc");
    expect(table as HTMLElement).toHaveStyleRule("cursor", "not-allowed");
  });
});