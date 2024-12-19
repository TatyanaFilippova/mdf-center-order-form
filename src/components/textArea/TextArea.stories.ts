import TextArea from "./TextArea";
import { StoryObj } from "@storybook/react";

// обязательный объект, нужен чтобы указать сторибуку, что это сторис
const meta = {
  title: "components/TextArea",
  component: TextArea,
};
// обязательно ему сделать export default
export default meta;

// тип, чтобы было удобнее писать сторисы
type Story = StoryObj<typeof meta>;

// Сам сторис, args - пропсы компонента
export const WithPlaceholder: Story = {
  args: {
    label: "scfea",
    message: "efca",
    placeholder: "dwqcv",
  },
};

export const WithError: Story = {
  args: {
    placeholder: "оватполва",
    isErrors: true,
    label: "scfea",
    messageErrors: "• Ошибка: не верно введено поле",
  },
};
