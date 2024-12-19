
import InputEntrance from "./InputEntrance";
import { StoryObj } from "@storybook/react";

// обязательный объект, нужен чтобы указать сторибуку, что это сторис
const meta = {
  title: "components/InputEntrance",
  component: InputEntrance,
};
// обязательно ему сделать export default
export default meta;

// тип, чтобы было удобнее писать сторисы
type Story = StoryObj<typeof meta>;

// Сам сторис, args - пропсы компонента
export const WithPlaceholder: Story = {
  args: {
    placeholder: "оватполва",
  },
};

// второй сторис
export const WithError: Story = {
  args: {
    placeholder: "оватполва",
    isErrors: true,
  },
};
