import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyAccordionProps } from "../components/Accordion";
import "../components/Accordion";
import "../components/Alert";

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
  title: "Components/Accordion",
  component: "candy-accordion",
  render: renderAccordion,
  argTypes: {
    label: {
      description: "Label of the element",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "Home",
        },
      },
    },
    active: {
      name: "?active",
      description: "Expand the accordion",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "False",
        },
      },
    },
    disabled: {
      name: "?disabled",
      description: "Is the item disabled",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "False",
        },
      },
    },
  },
} as Meta<CandyAccordionProps>;

export const Accordion: Story = {
  args: {
    label: "Candy-Doc",
    active: false,
    disabled: false,
  },
};
