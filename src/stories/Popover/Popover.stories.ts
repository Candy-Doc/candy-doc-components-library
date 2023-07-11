import { StoryObj, Meta } from "@storybook/web-components";

import { CandyPopoverProps, PopoverSide } from "../../components/Popover";
import { meta } from "./PopoverMeta";
import { elementWithPopoverInSidebar } from "./Stories/ElementWithPopoverInSidebar";
import { elementWithPopoverInAnAccordion } from "./Stories/ElementWithPopoverInAnAccordion";
import { iconWithPopover } from "./Stories/IconWithPopover";
import "../../components/Popover/";
import "../../components/Sidebar";
import "../../components/Sidebar/Element";
import "../../components/Accordion";
import "./Stories/style.css";

type Story = StoryObj<CandyPopoverProps>;

export default {
  ...meta,
  title: "Components/Popover",
  render: elementWithPopoverInSidebar,
} as Meta<CandyPopoverProps>;

export const ElementWithPopoverInSidebar: Story = {
  args: {
    side: PopoverSide.Right,
  },
};

export const ElementWithPopoverInAnAccordion: Story = {
  args: {
    side: PopoverSide.Right,
  },
  render: (args: CandyPopoverProps) => elementWithPopoverInAnAccordion(args),
};

export const IconWithPopover: Story = {
  args: {
    side: PopoverSide.Right,
  },
  render: (args: CandyPopoverProps) => iconWithPopover(args),
};
