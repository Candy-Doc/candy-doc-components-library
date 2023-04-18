import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandySpinnerProps, SpinnerSizes } from "../components/Spinner";
import "../components/Spinner";

type Story = StoryObj<CandySpinnerProps>;

const renderSpinner = (args: CandySpinnerProps) => html`<div>
  <candy-spinner size=${args.size}></candy-spinner>
</div>`;

export default {
  title: "Components/Spinner",
  component: "candy-spinner",
  argTypes: {
    size: {
      description: "Size of the spinner",
      options: [SpinnerSizes.sm, SpinnerSizes.md, SpinnerSizes.xl],
      control: { type: "radio" },
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "md",
        },
      },
    },
  },
  render: renderSpinner,
} as Meta<CandySpinnerProps>;

export const Spinner: Story = {
  args: {
    size: SpinnerSizes.md,
  },
};
