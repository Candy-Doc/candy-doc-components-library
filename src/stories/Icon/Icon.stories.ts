import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { IconSizes, CandyIconProps } from "../../components/Icon";
import "../../components/Icon";
import { meta } from "./IconMeta";

type Story = StoryObj<CandyIconProps>;

const renderIcon = (args: CandyIconProps) => html`<div>
  <candy-icon size=${args.size}>
    <fa-icon slot="icon" class="fa-solid fa-candy-cane"></fa-icon>
  </candy-icon>
</div> `;

export default {
  ...meta,
  title: "Components/Icon",
  render: renderIcon,
} as Meta<CandyIconProps>;

export const Icon: Story = {
  args: {
    size: IconSizes.md,
  },
};
