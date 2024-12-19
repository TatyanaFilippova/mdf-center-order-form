import CheckboxInput from "./Checkbox";
import { StoryObj } from "@storybook/react";

// обязательный объект, нужен чтобы указать сторибуку, что это сторис
const meta = {
  title: "components/CheckboxInput",
  component: CheckboxInput,
};
// обязательно ему сделать export default
export default meta;

// тип, чтобы было удобнее писать сторисы
type Story = StoryObj<typeof meta>;

// Сам сторис, args - пропсы компонента
export const WithPlaceholder: Story = {
  args: {
    label:
      "Я ознакомился с пользовательским соглашением и согласен на обработку данных",
  },
};
