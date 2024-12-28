import { StoryObj } from "@storybook/react";
import PersonCard from "./PersonCard";

// обязательный объект, нужен чтобы указать сторибуку, что это сторис
const meta = {
  title: "components/PersonCard",
  component: PersonCard,
};
// обязательно ему сделать export default
export default meta;

// тип, чтобы было удобнее писать сторисы
type Story = StoryObj<typeof meta>;

// Сам сторис, args - пропсы компонента
export const WithPesrsonCard: Story = {
  args: {
    
  },
};
