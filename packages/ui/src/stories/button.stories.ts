import { Story, Meta } from "@storybook/web-components";
import { html } from "lit";

import "../components/Button/Button";
import { CandyButtonProps } from "../components/Button/Button";
import { ButtonSizes, ButtonTypes } from "../components/Button/Buttons";

export default {
  title: "Button",
  component: "candy-button",
  args: {
    label: "Click me",
  },
} as Meta<CandyButtonProps>;

const Template: Story<CandyButtonProps> = (args) =>
  html`<div>
    <div>
      <candy-button
        label=${args.label}
        size=${ButtonSizes.sm}
        type=${ButtonTypes.Primary}
      ></candy-button>
      <candy-button
        label=${args.label}
        size=${ButtonSizes.md}
        type=${ButtonTypes.Primary}
      ></candy-button>
      <candy-button
        label=${args.label}
        size=${ButtonSizes.xl}
        type=${ButtonTypes.Primary}
      ></candy-button>
    </div>
    <div>
      <candy-button
        label=${args.label}
        size=${ButtonSizes.sm}
        type=${ButtonTypes.Secondary}
      ></candy-button>
      <candy-button
        label=${args.label}
        size=${ButtonSizes.md}
        type=${ButtonTypes.Secondary}
      ></candy-button>
      <candy-button
        label=${args.label}
        size=${ButtonSizes.xl}
        type=${ButtonTypes.Secondary}
      ></candy-button>
    </div>
  </div>`;

export const Button = Template.bind({});
