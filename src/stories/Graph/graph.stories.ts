import { Story } from "@storybook/web-components";
import { html } from "lit";

import "../../components/Graph/Graph";

export default {
  title: "Graph",
  component: "candy-graph",
};

export const JustABoundedContext: Story = () => {
  return html`<candy-graph domain=${justABoundedContext}></candy-graph>`;
};

export const TwoBoundedContext: Story = () => {
  return html`<candy-graph domain=${twoBoundedContext}></candy-graph>`;
};

const justABoundedContext = JSON.stringify([
  {
    simpleName: "Library",
    canonicalName: "fr.ipponlille.library.package-info",
    description: "Library of books",
    packageName: "fr.ipponlille.library",
    coreConcepts: [],
    domainCommands: [],
    valueObjects: [],
    aggregates: [],
    domainEvents: [],
  },
]);

const twoBoundedContext = JSON.stringify([
  {
    simpleName: "Library",
    canonicalName: "fr.ipponlille.library.package-info",
    description: "Library of books",
    packageName: "fr.ipponlille.library",
    coreConcepts: [],
    domainCommands: [],
    valueObjects: [],
    aggregates: [],
    domainEvents: [],
  },
  {
    simpleName: "Library",
    canonicalName: "fr.ipponlille.library.package-info",
    description: "Library of books",
    packageName: "fr.ipponlille.library",
    coreConcepts: [],
    domainCommands: [],
    valueObjects: [],
    aggregates: [],
    domainEvents: [],
  },
]);
