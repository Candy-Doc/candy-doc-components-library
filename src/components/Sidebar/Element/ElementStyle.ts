import { css } from "lit";

export default css`
  .element-container {
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
    width: 2rem;
    height: 2rem;
  }

  .element-container-extended {
    width: 100%;
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

  .text-blue {
    color: rgb(37 99 235);
  }

  .text-black {
    color: rgb(0 0 0);
  }

  .bg-gray {
    background-color: rgb(243 244 246) !important;
  }

  p {
    all: unset;
    margin-left: 0.5rem;
  }
`;
