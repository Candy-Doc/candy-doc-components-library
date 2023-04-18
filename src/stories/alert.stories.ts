import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import { CandyAlertProps, AlertTypes } from "../components/Alert";
import "../components/Alert";

type Story = StoryObj<CandyAlertProps>;

const renderAlert = (args: CandyAlertProps) => html`<candy-alert alertType=${args.type}>
  <span slot="content">I'm the text inside an info alert</span>
</candy-alert>`;

export default {
  title: "Components/Alerts",
  component: "candy-alert",
  argTypes: {
    type: {
      description: `Define the type of the alert`,
      options: [AlertTypes.Info, AlertTypes.Warn, AlertTypes.Error],
      control: { type: "radio" },
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: AlertTypes.Info,
        },
      },
    },
  },
  render: renderAlert,
} as Meta<CandyAlertProps>;

export const Alerts: Story = {
  args: {
    type: AlertTypes.Info,
  },
};
