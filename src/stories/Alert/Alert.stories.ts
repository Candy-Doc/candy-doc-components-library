import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyAlertProps, AlertTypes } from "../../components/Alert";
import "../../components/Alert";
import { meta } from "./AlertMeta";

type Story = StoryObj<CandyAlertProps>;

const renderAlert = (args: CandyAlertProps) => html`<candy-alert alertType=${args.type}>
  <span slot="content">I'm the text inside an info alert</span>
</candy-alert>`;

export default {
  ...meta,
  title: "Components/Alerts",
  render: renderAlert,
} as Meta<CandyAlertProps>;

export const Alerts: Story = {
  args: {
    type: AlertTypes.Info,
  },
};
