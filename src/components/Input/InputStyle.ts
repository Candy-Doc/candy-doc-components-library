import { css } from "lit";

export default css`
  .input-container label {
    display: block;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: rgb(55 65 81);
  }

  .input-box {
    margin-top: 0.25rem;
    position: relative;
    display: flex;
    align-items: center;
  }

  .input-box input {
    display: block;
    width: 100%;
    padding: 0.75rem 3rem 0.75rem 0.75rem;
    border: 1px solid;
    border-color: rgb(209 213 219);
    border-radius: 0.375rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.005);
  }

  input:focus {
    border-color: rgb(59 130 246);
    outline: none;
    box-shadow: 0 0 0 1px rgb(59 130 246);
  }

  .shortcut-box {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    padding: 0.375rem 0.375rem 0.375rem 0;
  }

  .shortcut-box kbd {
    font-family: inherit;
    display: inline-flex;
    align-items: center;
    border: 1px solid rgb(229 231 235);
    border-radius: 0.25rem;
    padding: 0 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: rgb(107 114 128);
  }
`;
