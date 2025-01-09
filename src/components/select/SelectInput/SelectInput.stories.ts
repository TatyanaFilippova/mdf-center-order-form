import SelectInput from "./SelectInput";
import { StoryObj } from "@storybook/react";

// обязательный объект, нужен чтобы указать сторибуку, что это сторис
const meta = {
  title: "components/SelectInput",
  component: SelectInput,
};
// обязательно ему сделать export default
export default meta;

// тип, чтобы было удобнее писать сторисы
type Story = StoryObj<typeof meta>;

// Сам сторис, args - пропсы компонента
export const WithPlaceholder: Story = {
  args: {
    label: "Имя пользователя",
    message: "Подсказка под инпутом",
    placeholder: "Выберете тип",
    isOpen: true,

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
