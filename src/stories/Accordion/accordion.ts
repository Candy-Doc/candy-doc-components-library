import { Meta } from "@storybook/web-components";
import { CandyAccordionProps } from "../../components/Accordion";

export const meta = {
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