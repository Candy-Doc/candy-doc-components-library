import { Story } from "@storybook/web-components";
import { html } from "lit";

import "../../components/Graph/Graph";

export default {
  title: "Graph",
  component: "candy-graph",
};

export const BoundedContextAndSharedKernel: Story = () => {
  return html`<candy-graph domain=${boundedContextAndSharedKernel}></candy-graph>`;
};

const boundedContextAndSharedKernel = JSON.stringify({
  boundedContexts: [
    {
      simpleName: "Library",
      canonicalName: "fr.ipponlille.library.package-info",
      description: "Library of books",
      packageName: "fr.ipponlille.library",
      aggregates: [
        {
          description: "A readable book",
          simpleName: "Book",
          canonicalName: "fr.ipponlille.library.Book",
          type: "AGGREGATE",
          interactsWith: [
            {
              simpleName: "EAN13",
              canonicalName: "fr.ipponlille.library.EAN13",
            },
            {
              simpleName: "Price",
              canonicalName: "fr.ipponlille.library.Price",
            },
          ],
          errors: [],
        },
      ],
      domainEvents: [],
      valueObjects: [
        {
          description: "Price of a book, in € and $",
          simpleName: "Price",
          canonicalName: "fr.ipponlille.library.Price",
          type: "VALUE_OBJECT",
          interactsWith: [
            {
              simpleName: "Book",
              canonicalName: "fr.ipponlille.library.Book",
            },
          ],
          errors: [],
        },
        {
          description: "Code of the book, composed of 13 numbers",
          simpleName: "EAN13",
          canonicalName: "fr.ipponlille.library.EAN13",
          type: "VALUE_OBJECT",
          interactsWith: [
            {
              simpleName: "Book",
              canonicalName: "fr.ipponlille.library.Book",
            },
          ],
          errors: [],
        },
      ],
      domainCommands: [],
      coreConcepts: [],
    },
  ],
  sharedKernels: [
    {
      simpleName: "Shared kernel",
      canonicalName: "fr.ipponlille.shared_kernel.package-info",
      description: "Common objects used in multiple bounded contexts",
      packageName: "fr.ipponlille.shared_kernel",
      relations: ["fr.ipponlille.library.package-info"],
      coreConcepts: [],
      valueObjects: [],
    },
  ],
});
