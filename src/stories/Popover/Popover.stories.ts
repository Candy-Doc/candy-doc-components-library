import { StoryObj, Meta } from "@storybook/web-components";
import { CandyPopoverProps, PopoverSide } from "../../components/Popover";
import { meta } from "./PopoverMeta";
import { renderPopover } from "./renderPopover";
import { secondRenderPopover } from "./SecondRenderPopover";
import { iconWithPopover } from "./IconWithPopover";
import { popoverOnHiddenTarget } from "./PopoverOnHiddenTarget";
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
    side: PopoverSide.Right
  },
};

export const PopoverBottom: Story = {
  args: {
    isActive: true,
    side: PopoverSide.Bottom
  },
};

export const PopoverLeft: Story = {
  args: {
    isActive: true,
    side: PopoverSide.Left
  },
};

export const PopoverTop: Story = {
  args: {
    isActive: true,
    side: PopoverSide.Top
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
    isActive: false,
    side: PopoverSide.Right,
    isParentVisible: true,
  },
  render: (args: CandyPopoverProps) => popoverOnHiddenTarget(args),
};
