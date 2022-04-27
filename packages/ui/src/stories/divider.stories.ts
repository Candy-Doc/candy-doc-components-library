import { Story } from "@storybook/web-components";
import { html } from "lit";

import "../components/Divider/divider";
import { CandyDivider } from "../components/Divider/divider";

export default {
  title: "Divider",
  component: "candy-divider",
};

const Template: Story<CandyDivider> = () => {
  return html` <p
      style="text-align: center; background-color: rgb(240,240,240); border-radius: 6px;"
    >
      Above
    </p>
    <candy-divider></candy-divider>
    <p style="text-align: center; background-color: rgb(240,240,240); border-radius: 6px;">
      Below
    </p>`;
};

export const Divider = Template.bind({});
