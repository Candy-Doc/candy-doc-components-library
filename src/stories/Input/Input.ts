import { Meta } from "@storybook/web-components";
import { CandyInputProps } from "../../components/Input";

export const meta = {
  title: "Components/Input",
  component: "candy-input",
  argTypes: {
    label: {
      description: "Title of the input",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "Quick search",
        },
      },
    },
    placeholder: {
      description: "Placeholder of the input",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "Search",
        },
      },
    },
    shortCut: {
      description: "Shortcut string to focus on the input",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "⌘K",
        },
      },
    },
    value: {
      description: "Input value",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
    }
  },
} as Meta<CandyInputProps>;