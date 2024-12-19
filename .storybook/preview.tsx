import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { Roboto } from "next/font/google";
import React from "react";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={roboto.className}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
