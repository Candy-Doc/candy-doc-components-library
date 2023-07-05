import { StoryObj } from "@storybook/web-components";

import { CandyAccordionProps } from "../../components/Accordion";
import { AccordionControl, meta } from "./AccordionMeta";
import { testOpenCloseAccordion, accordionWithOptionsTesting } from "./Accordion.test";
import { renderAccordion } from "./Stories/renderAccordion";
import { PopoverSide } from "../../components/Popover";
import { renderAccordionWithOption } from "./Stories/renderAccordionWithOption";
import { renderAccordionWithOptions } from "./Stories/renderAccordionWithOptions";
import "../../components/Accordion";
import "../../components/Alert";

type Story = StoryObj<CandyAccordionProps & AccordionControl>;

const isActive = {
  value: false,
};

export default {
  ...meta,
  title: "Components/Accordion",
  render: (args: CandyAccordionProps & AccordionControl) => renderAccordion(args, isActive),
};

export const Accordion: Story = {
  args: {
    label: "Basic accordion",
    active: false,
    disabled: false,
    hasIcon: false,
    collapsed: false,
    minimizeOptions: true,
  },
  play: ({ args, canvasElement, step }) =>
    testOpenCloseAccordion({ args, canvasElement, step }, isActive),
};

export const AccordionWithIcon: Story = {
  args: {
    label: "Accordion with icon",
    active: false,
    disabled: false,
    collapsed: false,
    hasIcon: true,
    hasOptions: false,
    minimizeOptions: true,
  },
  play: ({ args, canvasElement, step }) =>
    testOpenCloseAccordion({ args, canvasElement, step }, isActive),
};

export const AccordionWithOption: Story = {
  args: {
    label: "Accordion with option",
    active: false,
    disabled: false,
    collapsed: false,
    hasIcon: true,
    hasOptions: true,
    minimizeOptions: true,
  },
  render: (args: CandyAccordionProps & AccordionControl) =>
    renderAccordionWithOption(args, isActive),
  play: ({ args, canvasElement, step }) =>
    testOpenCloseAccordion({ args, canvasElement, step }, isActive),
};

export const AccordionWithOptions: Story = {
  args: {
    label: "Accordion with options",
    active: false,
    disabled: false,
    collapsed: false,
    hasIcon: true,
    hasOptions: true,
    minimizeOptions: true,
    optionsPopoverSide: PopoverSide.Left,
  },
  render: (args: CandyAccordionProps & AccordionControl) =>
    renderAccordionWithOptions(args, isActive),
  play: ({ args, canvasElement, step }) =>
    accordionWithOptionsTesting({ args, canvasElement, step }, isActive),
};
