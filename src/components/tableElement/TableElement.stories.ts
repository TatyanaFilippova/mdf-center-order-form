import TableElementItem from "./TableElementItem";
import { StoryObj } from "@storybook/react";

// обязательный объект, нужен чтобы указать сторибуку, что это сторис
const meta = {
  title: "components/TableElementItem",
  component: TableElementItem,
};
// обязательно ему сделать export default
export default meta;

// тип, чтобы было удобнее писать сторисы
type Story = StoryObj<typeof meta>;

// Сам сторис, args - пропсы компонента
export const WithTableElement: Story = {
  args: {
    number: "1",
    title: "Фасад прямой, ручка “U“",
    sizes: "50x120x24 (24)",
    radius: "16 мм.",
    colorType: "Пленка ПВХ",
    color: "бирюзовый",
    dateStart: "24.02.24",
    dateEnd: "24.03.24",
    status: "todo",
  },
};
