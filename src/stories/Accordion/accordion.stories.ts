import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyAccordionProps } from "../../components/Accordion";
import "../../components/Accordion";
import "../../components/Alert";
import { meta } from "./AccordionMeta";

type Story = StoryObj<CandyAccordionProps>;

const renderAccordion = (args: CandyAccordionProps) => html`<candy-accordion
  label=${"Section 1"}
  ?active=${args.active}
  ?disabled=${args.disabled}
>
  <candy-alert>
    <span slot="content">I'm the text inside an info alert</span>
  </candy-alert>
</candy-accordion>`;

export default {
  ...meta,
  title: "Components/Accordion",
  render: renderAccordion,
} as Meta<CandyAccordionProps>;

export const Accordion: Story = {
  args: {
    label: "Candy-Doc",
    active: false,
    disabled: false,
  },
};
