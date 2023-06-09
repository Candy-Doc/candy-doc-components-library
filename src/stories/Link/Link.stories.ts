import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { meta } from "./LinkMeta";
import { CandyLinkProps } from "../../components/Link";
import "../../components/Link";

type Story = StoryObj<CandyLinkProps>;

const renderLink = (args: CandyLinkProps) => html`<p>
  You should check this link
  <candy-link label=${args.label} url=${args.url} target=${"no"}></candy-link>
</p>`;

export default {
  ...meta,
  title: "Components/Link",
  component: "candy-link",
  render: renderLink,
} as Meta<CandyLinkProps>;

export const Link: Story = {
  args: {
    label: "this link",
    url: "https://candy-doc.com",
    target: "_blank",
  },
};
