import { StoryObj, Meta } from "@storybook/web-components";
import { TemplateResult, html } from "lit";

import type { CandySidebarProps } from "../../components/Sidebar";
import "../../components/Sidebar";
import "../../components/Sidebar/Element";
import "../../components/Accordion";

type Story = StoryObj<CandySidebarProps & CandySideBarControl>;

type CandySideBarElement = {
  label: string;
  active: boolean;
  icon?: string;
  optionsIcons?: Array<string>;
  childrens: Array<CandySideBarElement>;
};

type CandySideBarControl = {
  elements: Array<CandySideBarElement>;
};

const renderOptionsIcons = (optionsIcons: Array<string>) => {
  return optionsIcons.map(
    (icon: string) => html` <fa-icon slot="options" class=${icon}></fa-icon>`
  );
};

const renderAccordion = (element: CandySideBarElement) => {
  return html`<candy-accordion label=${element.label} ?active=${element.active}>
    <fa-icon slot="icon" class=${element.icon}></fa-icon>
    ${element.childrens.map((child: CandySideBarElement) => renderSidebarElements(child))}
    ${element.optionsIcons ? renderOptionsIcons(element.optionsIcons) : null}
  </candy-accordion>`;
};

const renderSimpleElement = (element: CandySideBarElement) => {
  return html`<candy-sidebar-element label=${element.label} ?active=${element.active}>
    ${element.icon ? html`<fa-icon slot="icon" class=${element.icon}></fa-icon>` : null}
  </candy-sidebar-element>`;
};

const renderSidebarElements = (element: CandySideBarElement): TemplateResult => {
  return element.childrens.length > 0 ? renderAccordion(element) : renderSimpleElement(element);
};

const renderSideBar = (args: CandySidebarProps & CandySideBarControl) => {
  console.log(args.canCollapse);
  return html`<candy-sidebar ?canCollapse=${args.canCollapse}>
    ${args.elements.map((element: CandySideBarElement) => renderSidebarElements(element))}
  </candy-sidebar>`;
};

export default {
  title: "Components/Sidebar",
  component: "candy-sidebar",
  argTypes: {
    canCollapse: {
      name: "?canCollapse",
      description: "Show collapse icon",
      table: {
        type: {
          summary: "Boolean",
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    elements: {
      description:
        "List of sidebar elements information. /!\\ This argument is to build the items and is not passed inside the sidebar.",
      table: {
        type: {
          summary: "object[]",
        },
        defaultValue: {
          summary: "[]",
        },
      },
    },
  },
  render: renderSideBar,
} as Meta<CandySidebarProps & CandySideBarControl>;

export const Sidebar: Story = {
  args: {
    canCollapse: true,
    elements: [
      {
        label: "Patterns",
        active: true,
        icon: "fa-solid fa-binoculars",
        optionsIcons: ["fa-solid fa-location-crosshairs", "fa-regular fa-eye"],
        childrens: [
          {
            label: "Book",
            active: true,
            icon: "fa-solid fa-binoculars",
            optionsIcons: ["fa-regular fa-eye"],
            childrens: [
              { label: "Price", active: false, optionsIcons: ["fa-regular fa-eye"], childrens: [] },
              { label: "Title", active: false, optionsIcons: ["fa-regular fa-eye"], childrens: [] },
              { label: "ISBN", active: false, optionsIcons: ["fa-regular fa-eye"], childrens: [] },
            ],
          },
        ],
      },
      {
        label: "Legend",
        active: false,
        icon: "fa-solid fa-cubes",
        optionsIcons: ["fa-regular fa-eye"],
        childrens: [],
      },
      {
        label: "Contact",
        active: false,
        icon: "fa-regular fa-object-group",
        optionsIcons: ["fa-regular fa-eye"],
        childrens: [],
      },
    ],
  },
};
