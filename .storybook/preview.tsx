import "@fortawesome/fontawesome-free/css/all.css";
import React from "react";
import { Title, Description, Primary, Controls, Stories } from "@storybook/blocks";

const preview = {
  parameters: {
    argTypesRegex: "^on[A-Z].*",
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export default preview;
