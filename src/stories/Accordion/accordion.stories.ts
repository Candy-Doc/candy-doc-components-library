import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyAccordionProps } from "../../components/Accordion";
import { AccordionControl, meta } from "./AccordionMeta";
import { playFunction } from "./Accordion.test";
import "../../components/Accordion";
import "../../components/Alert";

type Story = StoryObj<CandyAccordionProps & AccordionControl>;

const isActive = {
  value: false,
};

const renderAccordion = (args: CandyAccordionProps & AccordionControl) => html`<candy-accordion
  label=${args.label}
  ?active=${args.active}
  ?disabled=${args.disabled}
  @onChange=${({ detail }: CustomEvent) => (isActive.value = detail.value)}
>
  ${args.hasIcon ? html`<fa-icon slot="icon" class="fa-solid fa-candy-cane"></fa-icon>` : null}
  ${args.hasOptions
    ? html`<fa-icon slot="options" class="fa-solid fa-location-crosshairs"></fa-icon
        ><fa-icon slot="options" class="fa-regular fa-eye"></fa-icon>`
    : null}
  <candy-alert>
    <span slot="content"> I'm the text inside an info alert</span>
  </candy-alert>
</candy-accordion>`;

export default {
  ...meta,
  title: "Components/Accordion",
  render: renderAccordion,
} as Meta<CandyAccordionProps & AccordionControl>;

export const Accordion: Story = {
  args: {
    label: "Basic accordion",
    active: false,
    disabled: false,
    hasIcon: false,
    hasOptions: false,
  },
  play: ({ args, canvasElement, step }) => playFunction({ args, canvasElement, step }, isActive),
};

export const AccordionWithIcon: Story = {
  args: {
    label: "Accordion with icon",
    active: false,
    disabled: false,
    hasIcon: true,
    hasOptions: false,
  },
  play: ({ args, canvasElement, step }) => playFunction({ args, canvasElement, step }, isActive),
};

export const AccordionWithOptions: Story = {
  args: {
    label: "Accordion with options",
    active: false,
    disabled: false,
    hasIcon: true,
    hasOptions: true,
  },
  play: ({ args, canvasElement, step }) => playFunction({ args, canvasElement, step }, isActive),
};
