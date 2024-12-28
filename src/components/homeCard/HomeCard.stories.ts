import { StoryObj } from "@storybook/react";
import HomeCard from "./HomeCard";

// обязательный объект, нужен чтобы указать сторибуку, что это сторис
const meta = {
  title: "components/HomeCard",
  component: HomeCard,
};
// обязательно ему сделать export default
export default meta;

// тип, чтобы было удобнее писать сторисы
type Story = StoryObj<typeof meta>;

// Сам сторис, args - пропсы компонента
export const WithHomeCard: Story = {
  args: {
    numberOrders: "24",
    title: "Активных заказов",
  },
};
