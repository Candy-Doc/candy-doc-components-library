import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandySwitchProps } from "../components/Switch";
import "../components/Switch";

type Story = StoryObj<CandySwitchProps>;

const renderSwitch = (args: CandySwitchProps) =>
  html`<candy-switch ?activated=${args.activated} .onChange=${args.onChange}></candy-switch>`;

export default {
  title: "Components/Switch",
  component: "candy-switch",
  render: renderSwitch,
  argTypes: {
    activated: {
      description: "Boolean value of the switch",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "False",
        },
      },
    },
    onChange: {
      name: ".onChange",
      description:
        "Callback function triggered when the switch is clicked.<br/> New boolean value is given as parameter of the callback function",
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
} as Meta<CandySwitchProps>;

const onChange = (value?: boolean) => {
  console.log("new value: ", value);
};

export const Switch: Story = {
  args: {
    activated: false,
    onChange: onChange,
  },
};
