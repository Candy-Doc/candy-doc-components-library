import { SpinnerSizes } from "../../components/Spinner";

export const meta = {
  component: "candy-spinner",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **spinner**",
      },
    },
  },
  argTypes: {
    size: {
      description: "Size of the spinner",
      options: Object.values(SpinnerSizes),
      control: { type: "radio" },
      table: {
        category: "props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: SpinnerSizes.md,
        },
      },
    },
  },
};
