import { StoryObj, Meta } from "@storybook/web-components";

import { CandyPopoverProps, PopoverSide } from "../../components/Popover";
import { meta } from "./PopoverMeta";
import { elementWithPopoverInSidebar } from "./Stories/ElementWithPopoverInSidebar";
import { elementWithPopoverInAnAccordeon } from "./Stories/ElementWithPopoverInAnAccordeon";
import { iconWithPopover } from "./Stories/IconWithPopover";
import "../../components/Popover/";
import "../../components/Sidebar";
import "../../components/Sidebar/Element";
import "../../components/Accordion";
import "./Stories/style.css"

type Story = StoryObj<CandyPopoverProps>;

export default {
  ...meta,
  title: "Components/Popover",
  render: elementWithPopoverInSidebar,
} as Meta<CandyPopoverProps>;

export const ElementWithPopoverInSidebar: Story = {
  args: {
    isActive: true,
    side: PopoverSide.Right,
    isParentVisible: true,
  },
};

export const ElementWithPopoverInAnAccordeon: Story = {
  args: {
    isActive: true,
    side: PopoverSide.Right,
    isParentVisible: true,
  },
  render: (args: CandyPopoverProps) => elementWithPopoverInAnAccordeon(args),
};

export const IconWithPopover: Story = {
  args: {
    isActive: true,
    side: PopoverSide.Right,
  },
  render: (args: CandyPopoverProps) => iconWithPopover(args),
};