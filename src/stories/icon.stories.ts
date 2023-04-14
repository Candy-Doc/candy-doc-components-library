import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { IconSizes, CandyIconProps } from "../components/Icon";
import "../components/Icon";

type Story = StoryObj<CandyIconProps>;

const renderIcon = (args: CandyIconProps) => html`<div>
  <candy-icon size=${args.size}>
    <fa-icon slot="icon" class="fa-solid fa-candy-cane"></fa-icon>
  </candy-icon>
</div> `;

export default {
  title: "Components/Icon",
  component: "candy-icon",
  argTypes: {
    size: {
      options: [IconSizes.sm, IconSizes.md, IconSizes.xl],
      control: { type: "radio" },
    },
  },
  render: renderIcon,
} as Meta<CandyIconProps>;

export const Icon: Story = {
  args: {
    size: IconSizes.md,
  },
};
