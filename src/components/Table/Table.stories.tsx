import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { TableFooter } from "./TableFooter";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  args: {
    disabled: false,
    backgroundColor: "#ffffff",
    disabledBackgroundColor: "#e2e8f0",
  },
  argTypes: {
    backgroundColor: { control: "color" },
    disabledBackgroundColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Age</th>
        </tr>
      </TableHeader>

      <tbody>
        <TableRow>
          <TableCell>Sam</TableCell>
          <TableCell>Developer</TableCell>
          <TableCell align="right">16</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Alex</TableCell>
          <TableCell>Designer</TableCell>
          <TableCell align="right">15</TableCell>
        </TableRow>
      </tbody>

      <TableFooter>
        <tr>
          <td colSpan={3}>Footer summary</td>
        </tr>
      </TableFooter>
    </Table>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <Table {...args}>
      <TableHeader disabled>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Age</th>
        </tr>
      </TableHeader>

      <tbody>
        <TableRow disabled>
          <TableCell disabled disabledBackgroundColor="#e2e8f0">Sam</TableCell>
          <TableCell disabled disabledBackgroundColor="#e2e8f0">Developer</TableCell>
          <TableCell disabled disabledBackgroundColor="#e2e8f0" align="right">16</TableCell>
        </TableRow>
      </tbody>

      <TableFooter disabled>
        <tr>
          <td colSpan={3}>Footer summary</td>
        </tr>
      </TableFooter>
    </Table>
  ),
};