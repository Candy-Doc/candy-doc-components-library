import { html } from "lit";

import "../../components/Logos/LogoVertical";

export default {
  title: "Components/Logos/LogoVertical",
  component: "candy-logo-vertical",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **logo-vertical**",
      },
    },
  },
};

const Template = () => html`<candy-logo-vertical></candy-logo-vertical>`;

export const Vertical = Template.bind({});
