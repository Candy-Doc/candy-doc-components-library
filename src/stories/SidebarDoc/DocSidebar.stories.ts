import { StoryObj, Meta } from "@storybook/web-components";
import { TemplateResult, html } from "lit";

import "../../components/SidebarDoc";
import "../../components/SidebarDoc/DocElement";
import "../../components/SidebarDoc/DocTitle";

type Story = StoryObj<CandySideBarDocControl>;

type CandySideBarDocElement = {
  label: string;
  active: boolean;
  childrens?: Array<CandySideBarDocElement>;
}

type CandySideBarDocControl = {
  elements: Array<CandySideBarDocElement>;
};

const renderTitle = (element: CandySideBarDocElement) => {
  return html`<candy-sidebar-doc-title label=${element.label} ?active=${element.active}>
    ${element.childrens?.map((child) => renderSidebarElements(child))}
  </candy-sidebar-doc-title>`;
};

const renderSimpleElement = (element: CandySideBarDocElement) => {
  return html`<candy-sidebar-doc-element label=${element.label} ?active=${element.active}>
  </candy-sidebar-doc-element>`;
};

const renderSidebarElements = (element: CandySideBarDocElement): TemplateResult => {
  return element.childrens && element.childrens.length > 0 ? renderTitle(element) : renderSimpleElement(element);
};

const renderSideBar = (args: CandySideBarDocControl) => {
  return html`<candy-sidebar>
    ${args.elements.map((item) => renderSidebarElements(item))}
</candy-sidebar>`
};

export default {
  title: "Components/SidebarDoc",
  component: "candy-sidebar-doc",
  argTypes: {
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
} as Meta<CandySideBarDocControl>;

export const DocSidebar: Story = {
  args: {
    elements: [
      { label: "Introduction", active: true, childrens: [
        { label: "Getting started", active: true },
        { label: "What is DDD", active: false }
      ] },
      { label: "Candy Board", active: true, childrens: [
          { label: "Why is this the best project ever", active: false },
          { label: "Why is the last topic false", active: true },
          { label: "What should I believe between good or bad", active: false }
        ]
      },
    ],
  },
};
