import { StoryObj, Meta } from "@storybook/web-components";

import { CandyPopoverProps, PopoverSide } from "../../components/Popover";
import { meta } from "./PopoverMeta";
import { renderPopover } from "./Stories/renderPopover";
import { secondRenderPopover } from "./Stories/SecondRenderPopover";
import { iconWithPopover } from "./Stories/IconWithPopover";
import { popoverOnHiddenTarget } from "./Stories/PopoverOnHiddenTarget";
import "../../components/Popover/";
import "../../components/Sidebar";
import "../../components/Sidebar/Element";
import "../../components/Accordion";

type Story = StoryObj<CandyPopoverProps>;

export default {
  ...meta,
  title: "Components/Popover",
  render: renderPopover,
} as Meta<CandyPopoverProps>;

export const Popover: Story = {
  args: {
    isActive: true,
    side: PopoverSide.Right,
    isParentVisible: true,
  },
};

export const PopoverSecondUseCase: Story = {
  args: {
    isActive: true,
    side: PopoverSide.Right,
    isParentVisible: true,
  },
  render: (args: CandyPopoverProps) => secondRenderPopover(args),
};

export const IconWithPopover: Story = {
  args: {
    isActive: true,
    side: PopoverSide.Right,
  },
  render: (args: CandyPopoverProps) => iconWithPopover(args),
};

export const HiddenTarget: Story = {
  args: {
    isActive: true,
    side: PopoverSide.Right,
    isParentVisible: false,
  },
  render: (args: CandyPopoverProps) => popoverOnHiddenTarget(args),
};
