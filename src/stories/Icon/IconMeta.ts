import { IconSizes } from "../../components/Icon";

export const meta = {
  component: "candy-icon",
  argTypes: {
    size: {
      description:
        "Size of the <br/> Icon not directly included in the candy-element you have to manually wrap it inside <candy-sidebar-element> using slot='icon' attribute on the fa-icon",
      options: Object.values(IconSizes),
      control: { type: "radio" },
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: IconSizes.md,
        },
      },
    },
  },
};
