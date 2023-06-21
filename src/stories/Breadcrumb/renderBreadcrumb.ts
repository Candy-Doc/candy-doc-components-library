import { TemplateResult, html } from "lit";
import { CandyBreadcrumbElementProps } from "../../components/Breadcrumb/Element";
import { CandyBreadcrumbControl } from "./BreadcrumbMeta";

export const renderBreadcrumb = (args: CandyBreadcrumbControl) => {
  return html`<candy-breadcrumb>
    ${args.elements.map((props: CandyBreadcrumbElementProps) => renderBreadcrumbElement(props))}
  </candy-breadcrumb>`;
};

const renderBreadcrumbElement = (props: CandyBreadcrumbElementProps): TemplateResult => {
  return html`<candy-breadcrumb-element label=${props.label} ?last=${props.last}>
  </candy-breadcrumb-element>`;
};
