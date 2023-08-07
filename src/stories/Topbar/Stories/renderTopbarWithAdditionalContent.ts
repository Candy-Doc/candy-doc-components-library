import { html } from "lit";
import "../../../components/SidebarDoc";
import "../../../components/SidebarDoc/DocTitle";
import "../../../components/SidebarDoc/DocElement";

export const renderTopbarWithAdditionalContent = () => html`
  <candy-topbar>
    <candy-topbar-element label="Getting Started"></candy-topbar-element>
    <candy-topbar-element label="Graph"></candy-topbar-element>
    <candy-topbar-element label="Contact">
      <fa-icon slot="icon" class="fa-brands fa-github"></fa-icon>
    </candy-topbar-element>
    <candy-topbar-element>
      <a slot="icon" href="https://google.com"> <fa-icon class="fa-brands fa-github"> </fa-icon></a>
    </candy-topbar-element>
    <candy-sidebar-doc slot="drawer-content">
      <candy-sidebar-doc-title label="Lorem ipsum">
        <candy-sidebar-doc-element label="Ut labore et"></candy-sidebar-doc-element>
        <candy-sidebar-doc-element label="Nisi ut aliquip"></candy-sidebar-doc-element>
        <candy-sidebar-doc-element label="Qui dolorem ipsum"></candy-sidebar-doc-element>
      </candy-sidebar-doc-title>
      <candy-sidebar-doc-title label="Solor sit amet">
        <candy-sidebar-doc-element label="Nulla pariatur"></candy-sidebar-doc-element>
      </candy-sidebar-doc-title>
      <candy-sidebar-doc-title label="Consectetur">
        <candy-sidebar-doc-element label="Ut enim ad minima"></candy-sidebar-doc-element>
      </candy-sidebar-doc-title>
      <candy-sidebar-doc-title label="Adipiscing">
        <candy-sidebar-doc-element label="Iure reprehenderit"></candy-sidebar-doc-element>
      </candy-sidebar-doc-title>
      <candy-sidebar-doc-title label="Elit">
        <candy-sidebar-doc-element label="Eius modi tempora"></candy-sidebar-doc-element>
      </candy-sidebar-doc-title>
      <candy-sidebar-doc-title label="Eiusmod">
        <candy-sidebar-doc-element label="Dignissimos ducimus"></candy-sidebar-doc-element>
      </candy-sidebar-doc-title>
    </candy-sidebar-doc>
  </candy-topbar>
`;
