import { css } from "lit";

export default css`
  .element-container {
    width: 100%;
    margin-bottom: 0.25rem;
    border-radius: 0.375rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    background: transparent;
    border: none;
  }

  .element-container:hover {
    background-color: rgb(249 250 251);
  }

  button:disabled {
    background-color: rgb(248 250 252);
    color: rgb(100 116 139);
    border-color: rgb(226 232 240);
    box-shadow: 0 0 #0000;
  }

  .icon-container ::slotted(*) {
    margin-right: 1rem;
  }

  .text-blue {
    color: rgb(37 99 235);
  }

  .text-black {
    color: rgb(0 0 0);
  }

  .bg-gray {
    background-color: rgb(243 244 246) !important;
  }
`;
