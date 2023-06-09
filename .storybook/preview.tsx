import "@fortawesome/fontawesome-free/css/all.css";

const preview = {
  parameters: {
    argTypesRegex: "^on[A-Z].*",
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export default preview;
