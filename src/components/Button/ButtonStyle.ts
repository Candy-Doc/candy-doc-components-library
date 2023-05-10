import { css } from "lit";

export default css`
  .button-container {
    border: color: transparent;
    font-weight: 500;
    text-decoration: none;
    border-style: none;
    font-family: inherit;
  }

  .primary {
    color: white;
    background-color: rgb(37 99 235);
  }

   .primary:hover {
    background-color: rgb(29 78 216);
  }

  .secondary {
    color: rgb(29 78 216);
    background-color: rgb(219 234 254);
  }

  .secondary:hover {
    background-color: rgb(191 219 254);
  }

  .danger {
    color: white;
    background-color: rgb(220 38 38);
  }

  .danger:hover {
    background-color: rgb(185 28 28);
  }

  .warn {
    background-color: rgb(253 224 71);
  }

  .warn:hover {
    background-color: rgb(250 204 21);
  }

  .sm {
    border-radius: .25rem;
    font-size: 0.75rem;
    line-height: 1rem;
    padding: 1rem;
    padding: 0.375rem 0.625rem;
  }

  .md {
    border-radius: .375rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: .5rem 1rem;
  }

  .xl {
    border-radius: .375rem;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 0.75rem 1.5rem;
  }
`;
