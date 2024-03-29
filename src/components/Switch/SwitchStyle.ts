import { css } from "lit";

export default css`
  .switch {
    position: relative;
    display: inline-flex;
    flex-shrink: 0;
    height: 1.5rem;
    width: 2.75rem;
    border: 2px solid transparent;
    border-radius: 999px;
    cursor: pointer;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    padding: 0;
  }

  [type="button"] {
    appearance: "button";
    background-image: none;
  }

  .switch:focus {
    outline: none;
  }

  .switch span {
    pointer-events: none;
    display: inline-block;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 999px;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke,
      opacity, box-shadow, transform, filter, backdrop-filter;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  .blue {
    background-color: rgb(37 99 235);
  }

  .gray {
    background-color: rgb(229 231 235);
  }

  .translate-x-5 {
    transform: translateX(1.25rem);
  }

  .translate-x-0 {
    transform: translateX(10);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;
