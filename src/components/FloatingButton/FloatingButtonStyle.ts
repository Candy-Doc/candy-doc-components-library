import { css } from "lit";

export default css`
  .button-container {
    font-weight: 300;
    text-decoration: none;
    font-family: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 2.5rem;
    z-index: 100;
  }

  .button:hover {
    cursor: pointer;
  }

  .window {
    position: fixed;
  }

  .parent {
    position: absolute;
  }

  .button {
    border-radius: 50%;
    color: white;
    border: none;
  }

  .sm {
    font-size: 0.75rem;
    width: 1.5rem;
    height: 1.5rem;
  }

  .md {
    font-size: 1.25rem;
    width: 2.5rem;
    height: 2.5rem;
  }

  .xl {
    font-size: 2rem;
    width: 4rem;
    height: 4rem;
  }

  .text-sm {
    font-size: 0.75rem;
  }

  .text-md {
    font-size: 1.25rem;
  }

  .text-xl {
    font-size: 2rem;
  }

  ::slotted(*) {
    text-decoration: none;
    color: inherit;
  }
`;
