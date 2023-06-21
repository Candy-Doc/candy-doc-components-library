import {ButtonSizes} from "../../components/Button";
import {FloatingButtonsPosition} from "../../components/FloatingButton/FloatingButtons";

export const meta = {
  component: "candy-floating-button",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **floating-button**"
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
    color: {
      description: "Define the color scheme of the button",
      table: {
        category: "props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "#2563EBFF",
        },
      },
      control: { type: "color", presetColors: ['#2563EBFF'] },
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
