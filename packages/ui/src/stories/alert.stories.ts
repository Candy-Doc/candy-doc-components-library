import { Story, Meta } from "@storybook/web-components";
import { html } from "lit";

import "../components/Alert/Alert";
import { CandyAlertProps } from "../components/Alert/Alert";
import { AlertTypes } from "../components/Alert/Alerts";

type CandyAlertControls = {
  text: string;
};

export default {
  title: "Alert",
  component: "candy-alert",
  args: {
    text: "I'm the text inside the alert",
  },
  argTypes: {
    type: {
      options: Object.values(AlertTypes),
      control: { type: "select" },
      defaultValue: AlertTypes.Info,
    },
  },
} as Meta<CandyAlertProps & CandyAlertControls>;

const Template: Story<CandyAlertProps & CandyAlertControls> = (args) =>
  html`<candy-alert alertType=${args.type}>
    <span slot="content">${args.text}</span>
  </candy-alert>`;

export const Alert = Template.bind({});
