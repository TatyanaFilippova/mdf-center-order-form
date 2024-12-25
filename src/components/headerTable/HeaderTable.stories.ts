import HeaderTable from "./HeaderTable";

import { StoryObj } from "@storybook/react";

// обязательный объект, нужен чтобы указать сторибуку, что это сторис
const meta = {
  title: "components/HeaderTable",
  component: HeaderTable,
};
// обязательно ему сделать export default
export default meta;

// тип, чтобы было удобнее писать сторисы
type Story = StoryObj<typeof meta>;

// Сам сторис, args - пропсы компонента

export const WithHeaderTable: Story = {
  args: {},
};
