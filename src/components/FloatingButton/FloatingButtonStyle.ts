import { css } from "lit";

export default css`
  .button-container {
    font-weight: 500;
    text-decoration: none;
    font-family: inherit;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    min-height: 2.5rem;
  }

  .button:hover {
    cursor: pointer;
  }

  .button {
    border-radius: 50%;
    color: white;
    border: none;
  }

  .sm {
    font-size: 0.75rem;
    line-height: 1rem;
    padding: 0.375rem 0.625rem;
  }

  .md {
    font-size: 1.25rem;
    line-height: 1.25rem;
    padding: 0.75rem 1rem;
  }

  .xl {
    font-size: 2rem;
    line-height: 1.5rem;
    padding: 1.15rem 1.5rem;
  }

  .top {
    top: 3.5rem;
  }

  .bottom {
    bottom: 3.5rem;
  }

  .left {
    left: 3.5rem;
  }

  .right {
    right: 3.5rem;
  }

  ::slotted(*) {
    text-decoration: none;
    color: inherit;
    width: 100%;
  }
`;
