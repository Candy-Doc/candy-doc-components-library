import { css } from "lit";

export default css`
  .breadcrumb-container ol {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .breadcrumb-container a {
    color: rgb(107 114 128);
    text-decoration: none;
    display: block;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .breadcrumb-container a:hover {
    display: block;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    color: rgb(55 65 81);
  }

  .breadcrumb-container .icon {
    width: 1rem;
    height: 1rem;
    color: rgb(107 114 128);
  }

  ol {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    margin-left: 0.25rem;
  }
`;
