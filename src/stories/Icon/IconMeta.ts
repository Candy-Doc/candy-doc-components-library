import { IconSizes } from "../../components/Icon";

export const meta = {
  component: "candy-icon",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **icon**"
      },
    },
  },
  argTypes: {
    size: {
      description:
        "Size of the <br/> Icon not directly included in the candy-element you have to manually wrap it inside <candy-sidebar-element> using slot='icon' attribute on the fa-icon",
      options: Object.values(IconSizes),
      control: { type: "radio" },
      table: {
        category: "props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: IconSizes.md,
        },
      },
    },
    slotIcon: {
      name: "icon",
      description: "Slot for the icon",
      control: { type: "radio" },
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
  },
};
