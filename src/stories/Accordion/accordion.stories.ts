import { StoryObj, Meta } from "@storybook/web-components";
import { userEvent } from "@storybook/testing-library";
import { getByShadowRole } from "shadow-dom-testing-library";
import { expect } from "@storybook/jest";
import { html } from "lit";

import { CandyAccordionProps } from "../../components/Accordion";
import { AccordionControl, meta } from "./AccordionMeta";
import "../../components/Accordion";
import "../../components/Alert";

type Story = StoryObj<CandyAccordionProps & AccordionControl>;

let isActive = false;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const playFunction = async ({ args, canvasElement, step }: any) => {
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
};

const renderAccordion = (args: CandyAccordionProps & AccordionControl) => html`<candy-accordion
  label=${"Section 1"}
  ?active=${args.active}
  ?disabled=${args.disabled}
  @onChange=${({ detail }: CustomEvent) => (isActive = detail.value)}
>
  ${args.hasIcon ? html`<fa-icon slot="icon" class="fa-solid fa-candy-cane"></fa-icon>` : null }
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
    label: "Candy-Doc",
    active: false,
    disabled: false,
    hasIcon: false,
  },
  play: playFunction,
};


export const AccordionWithIcon: Story = {
  args: {
    label: "Candy-Doc",
    active: false,
    disabled: false,
    hasIcon: true,
  },
  play: playFunction,
};