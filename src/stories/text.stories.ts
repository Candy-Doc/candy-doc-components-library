import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyTextProps } from "../components/Text";
import "../components/Text";

type Story = StoryObj<CandyTextProps>;

const renderProse = (args: CandyTextProps) =>
  html` <candy-text childText=${args.text}> </candy-text> `;

export default {
  title: "Components/Prose",
  component: "candy-text",
  render: renderProse,
} as Meta<CandyTextProps>;

export const Prose: Story = {
  args: {
    text: `
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>

      <p class="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis
        quae deleniti magnam tempore reprehenderit excepturi at perspiciatis quas
        cumque?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod
        beatae facere? Quas dicta reprehenderit itaque voluptatum magnam, porro
        excepturi?
      </p>
    `,
  },
};
