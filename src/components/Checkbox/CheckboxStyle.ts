import { css } from "lit";

export default css`
  .checkbox-container {
    position: relative;
    display: flex;
    align-items: flex-start;
  }

  .checkbox {
    height: 1.25rem;
    align-items: center;
    display: flex;
    cursor: pointer;
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    background-color: #fff;
    margin: 0;

    width: 1rem;
    height: 1rem;
    border: 0.1rem solid rgb(209 213 219);
    border-radius: 0.35em;
    transition: 0.1s ease-in-out;
  }

  input[type="checkbox"]:hover:not(:disabled) {
    border-color: rgb(37 99 235);
    cursor: pointer;
    transition: 0.1s ease-in-out;
  }

  input[type="checkbox"]::before {
    width: 1rem;
    height: 1rem;
  }

  input[type="checkbox"]:checked {
    transition: 0.1s ease-in-out;
    border: none;
    background-color: rgb(37 99 235);
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: repeat;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
    border-radius: 0.35em;
  }

  input[type="checkbox"]:disabled {
    background-color: rgb(249 253 255);
    cursor: not-allowed;
  }

  .label-container {
    margin-left: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  label:hover {
    cursor: pointer;
  }

  .label-container label {
    color: rgb(55 65 81);
    font-weight: 500;
  }

  .label-container p {
    margin: 0;
    color: rgb(107 114 128);
  }
`;
