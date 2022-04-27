import { Story, Meta } from "@storybook/web-components";
import { html } from "lit";

import "../components/Spinner/spinner";
import { CandySpinner, CandySpinnerProps } from "../components/Spinner/spinner";
import { SpinnerSizes } from "../components/Spinner/spinners";

export default {
  title: "Spinner",
  component: "candy-spinner",
  args: {
    size: SpinnerSizes.md,
  },
  argTypes: {
    size: {
      options: Object.values(SpinnerSizes),
      control: { type: "select" },
    },
  },
} as Meta<CandySpinnerProps>;

const Template: Story<CandySpinner> = (args) => {
  return html` <candy-spinner size=${args.size}></candy-spinner>`;
};

export const Spinner = Template.bind({});
