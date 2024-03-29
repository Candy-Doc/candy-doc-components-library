import { css } from "lit";

export default css`
  a {
    color: rgb(107 114 128);
    text-decoration: none;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  a:hover {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    color: rgb(55 65 81);
  }

  .icon {
    width: 1rem;
    height: 1rem;
    color: rgb(107 114 128);
  }

  li {
    display: flex;
    align-items: center;
    margin-left: 0.25rem;
  }
`;
