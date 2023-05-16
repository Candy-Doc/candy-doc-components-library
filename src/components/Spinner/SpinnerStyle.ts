import { css } from "lit";

export default css`
  .spinner-container svg {
    margin-right: 0.5rem;
    color: rgb(229 231 235);
    animation: spin 1s linear infinite;
    fill: #2563eb;
  }

  .sm {
    width: 1rem;
    height: 1rem;
  }

  .md {
    width: 2rem;
    height: 2rem;
  }

  .xl {
    width: 3rem;
    height: 3rem;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
