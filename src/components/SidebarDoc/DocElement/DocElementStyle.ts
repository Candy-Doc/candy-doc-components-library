import { css } from "lit";

export default css`
  .element-container {
    width: 100%;
    margin-bottom: 0.25rem;
    border-radius: 0.375rem;
    padding: 0.2rem 0;
    display: flex;
    align-items: center;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    background: transparent;
    border: none;
    position: relative;
  }

  .element-container:hover {
    cursor: pointer;
  }

  .element-container:hover > p {
    color: rgb(37 99 235);
    transition: 0.1s ease-in-out;
  }

  .icon-container {
    position: absolute;
    display: flex;
    align-items: center;
    left: -14px;
  }

  .text-blue {
    color: rgb(37 99 235);
  }

  .text-gray {
    color: #6d6d6d;
  }

  p {
    all: unset;
    width: 100%;
    text-align: left;
    margin-left: 0.5rem;
    transition: 0.1s ease-in-out;
  }

  img {
    width: 14px;
    height: 14px;
  }
`;
