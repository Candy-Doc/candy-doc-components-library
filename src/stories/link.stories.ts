import { Story, Meta } from "@storybook/web-components";
import { html } from "lit";

import "../components/Link/Link";
import { CandyLinkProps } from "../components/Link/Link";

export default {
  title: "Link",
  component: "candy-link",
  args: {
    label: "this link",
    url: "https://candy-doc.com",
  },
} as Meta<CandyLinkProps>;

const Template: Story<CandyLinkProps> = (args) =>
  html`<p>
    You should check this link <candy-link label=${args.label} url=${args.url}></candy-link>
  </p>`;

export const Link = Template.bind({});
