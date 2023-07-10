import { CSSResultGroup, css } from "lit";

export default css`
  .end-icons {
    display: flex;
    justify-content: end;
    flex-grow: 1;
  }

  .options-container {
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100%;
    gap: 1rem;
    padding: 0 1rem;
  }

  .hidden {
    display: none;
  }
` as CSSResultGroup;
