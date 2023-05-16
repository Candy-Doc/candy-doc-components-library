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
      description:
        "Size of the <br/> Icon not directly included in the candy-element you have to manually wrap it inside <candy-sidebar-element> using slot='icon' attribute on the fa-icon",
      options: Object.values(IconSizes),
      control: { type: "radio" },
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: IconSizes.md,
        },
      },
    },
  },
  render: renderIcon,
} as Meta<CandyIconProps>;

export const Icon: Story = {
  args: {
    size: IconSizes.md,
  },
};
