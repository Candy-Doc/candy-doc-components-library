import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyInputProps } from "../components/Input";
import "../components/Input";

type Story = StoryObj<CandyInputProps>;

const renderInput = (args: CandyInputProps) => html`<candy-input
  label=${args.label}
  placeholder=${args.placeholder}
  shortCut=${args.shortCut}
>
</candy-input>`;

export default {
  title: "Components/Input",
  component: "candy-input",
  render: renderInput,
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
  },
} as Meta<CandyInputProps>;

export const Input: Story = {
  args: {
    label: "Quick search",
    placeholder: "Search",
    shortCut: "⌘B",
  },
};
