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

  .options-container > ::slotted(*) {
    transition: 0.1s ease-in-out;
  }

  .options-container > ::slotted(*:hover) {
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }

  .hidden {
    display: none;
  }
` as CSSResultGroup;
