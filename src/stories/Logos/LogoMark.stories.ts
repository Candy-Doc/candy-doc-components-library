import { html } from "lit";

import "../../components/Logos/LogoMark";

export default {
  title: "Components/Logos/LogoMark",
  component: "candy-logo-mark",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **logo-mark**",
      },
    },
  },
};

const Template = () => html`<candy-logo-mark></candy-logo-mark>`;

export const Mark = Template.bind({});
