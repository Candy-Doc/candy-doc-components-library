import {ButtonSizes, ButtonTypes} from "../../components/Button";
import {FloatingButtonsPosition} from "../../components/FloatingButton/FloatingButtons";

export type FloatingButtonControl = {
  hasIcon: boolean;
}
export const meta = {
  component: "candy-floating-button",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **button**"
      },
    },
  },
  argTypes: {
    label: {
      description: "Text displayed on the button",
      table: {
        category: "props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "Button",
        },
      },
      control: { type: "text" },
    },
    type: {
      description: "Define the color scheme of the button",
      options: Object.values(ButtonTypes),
      control: { type: "radio" },
      table: {
        category: "props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: ButtonTypes.Primary,
        },
      },
    },
    size: {
      description: "Define the size of the button",
      options: Object.values(ButtonSizes),
      control: { type: "radio" },
      table: {
        category: "props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: ButtonSizes.md,
        },
      },
    },
    position: {
      description: "Define the position of the button",
      options: Object.values(FloatingButtonsPosition),
      control: { type: "radio" },
      table: {
        category: "props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: FloatingButtonsPosition.br,
        },
      },
    },
    iconSlot: {
      name: "icon",
      description: "Slot for the button's icon",
      table: {
        category: "slots",
        type: {
          summary: "HTMLElement",
        },
        defaultValue: {
          summary: "icon",
        },
      },
    },
    hasIcon: {
      table: {
        disable: true,
      }
    }
  },
};
