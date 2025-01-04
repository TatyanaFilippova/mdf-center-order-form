import { StoryObj } from "@storybook/react";
import HeaderProfile from "./HeaderProfile";

// обязательный объект, нужен чтобы указать сторибуку, что это сторис
const meta = {
  title: "components/Header/HeaderProfile",
  component: HeaderProfile,
};
// обязательно ему сделать export default
export default meta;

// тип, чтобы было удобнее писать сторисы
type Story = StoryObj<typeof meta>;

// Сам сторис, args - пропсы компонента
export const WithHeaderProfile: Story = {
  args: {},
};
