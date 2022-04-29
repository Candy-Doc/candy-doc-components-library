import { Story, Meta } from "@storybook/web-components";
import { html } from "lit";

import "../components/Spinner/spinner";
import { CandySpinner, CandySpinnerProps } from "../components/Spinner/spinner";
import { SpinnerSizes } from "../components/Spinner/spinners";

export default {
  title: "Spinner",
  component: "candy-spinner",
} as Meta<CandySpinnerProps>;

const Template: Story<CandySpinner> = () => {
  return html`<div>
    <candy-spinner size=${SpinnerSizes.sm}></candy-spinner>
    <candy-spinner size=${SpinnerSizes.md}></candy-spinner>
    <candy-spinner size=${SpinnerSizes.xl}></candy-spinner>
  </div>`;
};

export const Spinner = Template.bind({});
