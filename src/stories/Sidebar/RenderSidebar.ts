import { TemplateResult, html } from "lit";
import type { CandySideBarControl, CandySideBarElement } from "./SidebarMeta";
import type { CandySidebarProps } from "../../components/Sidebar";

const renderOptionsIcons = (optionsIcons: Array<string>) => {
  return optionsIcons.map((icon: string) => html`<fa-icon slot="options" class=${icon}></fa-icon>`);
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

export const renderSideBar = (args: CandySidebarProps & CandySideBarControl) => {
  return html`<candy-sidebar ?canCollapse=${args.canCollapse} @onCollapse=${args.onCollapse}>
    ${args.elements.map((element: CandySideBarElement) => renderSidebarElements(element))}
  </candy-sidebar>`;
};
