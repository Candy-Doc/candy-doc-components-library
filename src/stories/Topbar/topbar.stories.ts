import { StoryObj } from "@storybook/web-components";

import { meta } from "./TopbarMeta";
import { renderTobpar } from "./Stories/renderTopbar";
import { renderTopbarWithAdditionalContent } from "./Stories/renderTopbarWithAdditionalContent";
import "../../components/Topbar/Topbar";
import "../../components/Topbar/Element";

export default {
  ...meta,
  title: "Components/Topbar",
  render: renderTobpar,
};

export const Topbar: StoryObj = {};

export const RenderTopbarWithAdditionalContent: StoryObj = {
  render: renderTopbarWithAdditionalContent,
};
