import { css } from "lit";

export default css`
  .alert-container {
    border-left: solid 4px;
    padding: 1rem;
  }

  .info {
    border-color: rgb(96 165 250);
    background-color: rgb(239 246 255);
    color: rgb(29 78 216);
  }

  .warn {
    border-color: rgb(250 204 21);
    background-color: rgb(254 252 232);
    color: rgb(161 98 7);
  }

  .error {
    border-color: rgb(248 113 113);
    background-color: rgb(254 242 242);
    color: rgb(185 28 28);
  }

  .alert-icon {
    flex-shrink: 0;
    height: 1.25rem;
    width: 1.25rem;
  }

  .info .alert-icon {
    color: rgb(96 165 250);
  }

  .warn .alert-icon {
    color: rgb(250 204 21);
  }

  .error .alert-icon {
    color: rgb(248 113 113);
  }

  .flex {
    display: flex;
  }

  .ml-3 {
    margin-left: 0.75rem;
  }

  .alert-container p {
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin: 0;
  }
`;
