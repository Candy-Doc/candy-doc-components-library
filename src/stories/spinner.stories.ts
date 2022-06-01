import { Story, Meta } from "@storybook/web-components";
import { html } from "lit";

import "../components/Spinner/Spinner";
import { CandySpinner, CandySpinnerProps } from "../components/Spinner/Spinner";
import { SpinnerSizes } from "../components/Spinner/Spinners";

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
