import { html } from "lit";

import "../../components/Logos/LogoHorizontal";

export default {
  title: "Components/Logos/LogoHorizontal",
  component: "candy-logo-horizontal",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **logo-horizontal**",
      },
    },
  },
};

const Template = () => html`<candy-logo-horizontal></candy-logo-horizontal>`;

export const Horizontal = Template.bind({});
