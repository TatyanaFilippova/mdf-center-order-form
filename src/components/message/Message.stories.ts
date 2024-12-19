import Message from "./Message";
import { StoryObj } from "@storybook/react";

// обязательный объект, нужен чтобы указать сторибуку, что это сторис
const meta = {
  title: "components/Message",
  component: Message,
};
// обязательно ему сделать export default
export default meta;

// тип, чтобы было удобнее писать сторисы
type Story = StoryObj<typeof meta>;

// Сам сторис, args - пропсы компонента
export const MessageText: Story = {
  args: {
    text: "оватполва",
  },
};
