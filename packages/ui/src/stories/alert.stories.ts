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
} as Meta<CandyAlertProps & CandyAlertControls>;

const Template: Story<CandyAlertProps & CandyAlertControls> = (args) =>
  html`
    <div>
      <candy-alert alertType=${AlertTypes.Info}>
        <span slot="content">${args.text}</span>
      </candy-alert>
      <candy-alert alertType=${AlertTypes.Warn}>
        <span slot="content">${args.text}</span>
      </candy-alert>
      <candy-alert alertType=${AlertTypes.Error}>
        <span slot="content">${args.text}</span>
      </candy-alert>
    </div>
  `;

export const Alert = Template.bind({});
