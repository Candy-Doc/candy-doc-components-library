import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyInputProps } from "../components/Input";
import "../components/Input";

type Story = StoryObj<CandyInputProps>;

const renderInput = (args: CandyInputProps) => html`<candy-input
  value=${args.value}
  label=${args.label}
  placeholder=${args.placeholder}
  shortCut=${args.shortCut}
  .onChange=${args.onChange}
>
</candy-input>`;

export default {
  title: "Components/Input",
  component: "candy-input",
  render: renderInput,
  argTypes: {
    value: {
      description: "Value of the input",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
    },
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
    onChange: {
      name: ".onChange",
      description:
        "Callback function triggered when the checkbox is updated.<br/> New boolean value is given as parameter of the callback function",
      table: {
        type: {
          summary: "function",
        },
        defaultValue: {
          summary: "() => void",
        },
      },
    },
  },
} as Meta<CandyInputProps>;

const handleInput = (newValue: string) => {
  console.log("new value: " + newValue);
};

export const Input: Story = {
  args: {
    value: "This is a research",
    label: "Quick search",
    placeholder: "Search",
    shortCut: "⌘B",
    onChange: handleInput,
  },
};
