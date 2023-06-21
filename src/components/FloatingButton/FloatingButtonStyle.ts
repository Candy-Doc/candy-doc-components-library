import { css } from "lit";

export default css`
  .button-container {
    font-weight: 500;
    text-decoration: none;
    font-family: inherit;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 0.50rem;
    align-items: center;
    justify-content: center;
    min-height: 2.5rem;
  }
  
  .button:hover {
    cursor: pointer;
  }
  
  .button {
    color: white;
    border: none;
  }

  .sm {
    border-radius: 50%;
    font-size: 0.75rem;
    line-height: 1rem;
    padding: 0.375rem 0.625rem;
  }

  .md {
    border-radius: 50%;
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: .625rem 1rem;
  }

  .xl {
    border-radius: 50%;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 1rem 1.5rem;
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
  }
`;
