import Select from "./Select";
import { StoryObj } from "@storybook/react";

// обязательный объект, нужен чтобы указать сторибуку, что это сторис
const meta = {
  title: "components/Select",
  component: Select,
};
// обязательно ему сделать export default
export default meta;

// тип, чтобы было удобнее писать сторисы
type Story = StoryObj<typeof meta>;

// Сам сторис, args - пропсы компонента
export const WithPlaceholder: Story = {
  args: {
    items: [
      {
        label: "Тип №1",
        value: "1",
      },
      {
        label: "Тип №2",
        value: "2",
      },
      {
        label: "Тип №3",
        value: "3",
      },
    ],
    label: "Имя пользователя",
    message: "Подсказка под инпутом",
    placeholder: "Выберете тип",
    value: "2",
  },
};
