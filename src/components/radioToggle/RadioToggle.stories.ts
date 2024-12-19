import RadioInput from "./RadioToggle";
import { StoryObj } from "@storybook/react";

// обязательный объект, нужен чтобы указать сторибуку, что это сторис
const meta = {
  title: "components/RadioInput",
  component: RadioInput,
};
// обязательно ему сделать export default
export default meta;

// тип, чтобы было удобнее писать сторисы
type Story = StoryObj<typeof meta>;

// Сам сторис, args - пропсы компонента
export const WithPlaceholder: Story = {
  args: {
    label: "Нужно ли заполнить анкету",
    message: "подсказка под инпутом",
    placeholder: "dwqcv",
  },
};

export const WithError: Story = {
  args: {
    placeholder: "оватполва",
    isErrors: true,
    label: "Нужно ли заполнить анкету",
    messageErrors: "• Ошибка: не верно введено поле",
  },
};
