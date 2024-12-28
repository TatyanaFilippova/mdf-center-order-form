import Header from "./Header";
import { StoryObj } from "@storybook/react";

// обязательный объект, нужен чтобы указать сторибуку, что это сторис
const meta = {
  title: "components/Header",
  component: Header,
};
// обязательно ему сделать export default
export default meta;

// тип, чтобы было удобнее писать сторисы
type Story = StoryObj<typeof meta>;

// Сам сторис, args - пропсы компонента
export const WithHeader: Story = {
  args: {
    title: "Cписок заказов",
    breadCrumbs: [
      {
        title: "Главная",
      },
      {
        title: "Мои заказы",
      },
    ],
  },
};
