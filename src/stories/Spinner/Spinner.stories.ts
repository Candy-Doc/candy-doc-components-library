import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandySpinnerProps, SpinnerSizes } from "../../components/Spinner";
import "../../components/Spinner";
import { meta } from "./SpinnerMeta";

type Story = StoryObj<CandySpinnerProps>;

const renderSpinner = (args: CandySpinnerProps) => html`<div>
  <candy-spinner size=${args.size}></candy-spinner>
</div>`;

export default {
  ...meta,
  title: "Components/Spinner",
  render: renderSpinner,
} as Meta<CandySpinnerProps>;

export const Spinner: Story = {
  args: {
    size: SpinnerSizes.md,
  },
};
