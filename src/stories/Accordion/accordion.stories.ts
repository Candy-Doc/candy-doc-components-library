import { StoryObj, Meta } from "@storybook/web-components";
import { userEvent } from "@storybook/testing-library";
import { getByShadowRole } from "shadow-dom-testing-library";
import { expect } from "@storybook/jest";
import { html } from "lit";

import { CandyAccordionProps } from "../../components/Accordion";
import { meta } from "./AccordionMeta";
import "../../components/Accordion";
import "../../components/Alert";

type Story = StoryObj<CandyAccordionProps>;

let isActive = false;

const renderAccordion = (args: CandyAccordionProps) => html`<candy-accordion
  label=${"Section 1"}
  ?active=${args.active}
  ?disabled=${args.disabled}
  @onChange=${({ detail }: CustomEvent) => isActive = detail.value}
>
  <candy-alert >
    <span slot="content" > I'm the text inside an info alert</span>
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
  play: async ({ args, canvasElement, step }) => {
    const accordion = getByShadowRole(canvasElement, "button");
    const initialAcccordionState = args.active;

    await step("Open accordion", async () => {
      await userEvent.click(accordion);
      await expect(isActive).toEqual(!initialAcccordionState);
    });
    await step("Close accordion", async () => {
      await userEvent.click(accordion);
      await expect(isActive).toEqual(initialAcccordionState);
    });
  },
};
