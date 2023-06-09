import { AlertTypes } from "../../components/Alert";

export const meta = {
  component: "candy-alert",
  argTypes: {
    type: {
      description: `Define the type of the alert`,
      options: Object.values(AlertTypes),
      control: { type: "radio" },
      table: {
        category: "props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: AlertTypes.Info,
        },
      },
    },
    contentSlot: {
      name: "content",
      description: "Set the alert content",
      table: {
        category: "slots",
        type: {
          summary: "HTMLElement",
        },
        defaultValue: {
          summary: "content",
        },
      },
    },
  },
};
