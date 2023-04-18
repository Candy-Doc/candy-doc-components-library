import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyCheckboxProps } from "../components/Checkbox";
import "../components/Checkbox";

type Story = StoryObj<CandyCheckboxProps>;

const renderCheckbox = (args: CandyCheckboxProps) =>
  html`<candy-checkbox
    ?checked=${args.checked}
    label=${args.label}
    description=${args.description}
    .onChange=${args.onChange}
  ></candy-checkbox>`;

export default {
  title: "Components/Checkbox",
  component: "candy-checkbox",
  argTypes: {
    checked: {
      description: "State of the checkbox",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "False",
        },
      },
    },
    label: {
      description: "Right-side text of the checkbox",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "Checkbox",
        },
      },
    },
    description: {
      description: "Text to add more information about the checkbox",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
    },
    onChange: {
      name: ".onChange",
      description:
        "Callback function triggered when the checkbox is clicked.<br/> New boolean value is given as parameter of the callback function",
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
  render: renderCheckbox,
} as Meta<CandyCheckboxProps>;

const onChange = (value?: boolean) => {
  console.log("new value: ", value);
};

export const Checkbox: Story = {
  args: {
    checked: false,
    label: "Checkbox",
    description: "This is a description",
    onChange: onChange,
  },
};
