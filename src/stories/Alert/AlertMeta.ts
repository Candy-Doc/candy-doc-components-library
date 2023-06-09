import { AlertTypes } from "../../components/Alert";

export const meta = {
  component: "candy-alert",
  argTypes: {
    type: {
      description: `Define the type of the alert`,
      options: Object.values(AlertTypes),
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
};
