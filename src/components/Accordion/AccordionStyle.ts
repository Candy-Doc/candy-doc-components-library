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
    height: 2rem;
    width: 2rem;
  }

  .element-container-extended {
    width: 100%;
  }

  .element-container:hover {
    background-color: rgb(249 250 251);
    cursor: pointer;
  }

  button:disabled {
    background-color: rgb(248 250 252);
    color: rgb(100 116 139);
    border-color: rgb(226 232 240);
    box-shadow: 0 0 #0000;
  }

  p {
    all: unset;
    margin-left: 0.5rem;
  }

  .end-icons {
    display: flex;
    justify-content: end;
    flex-grow: 1;
  }

  .options-container {
    display: flex;
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

  .text-blue {
    color: rgb(37 99 235);
  }

  .text-blue .chevron:after,
  .text-blue .chevron:before {
    background: rgb(37 99 235);
  }

  .text-black {
    color: rgb(0 0 0);
  }

  .bg-gray {
    background-color: rgb(243 244 246) !important;
  }

  .accordion-childrens {
    margin-left: 1.25rem;
  }

  .chevron {
    position: relative;
    padding: 1px;
    height: 1px;
    width: 12px;
    top: -1px;
    transform: rotate(-90deg);
    transition: 0.2s ease-in-out;
  }

  .chevron:before {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 50%;
    background: black;
    -webkit-transform: skew(0, 35deg);
    -moz-transform: skew(0, 35deg);
    -ms-transform: skew(0, 35deg);
    -o-transform: skew(0, 35deg);
    transform: skew(0, 35deg);
    border-radius: 2px 0 0 1px;
  }

  .chevron:after {
    content: "";
    position: absolute;
    left: 50%;
    height: 100%;
    width: 50%;
    background: black;
    -webkit-transform: skew(0, -35deg);
    -moz-transform: skew(0, -35deg);
    -ms-transform: skew(0, -35deg);
    -o-transform: skew(0, -35deg);
    transform: skew(0, -35deg);
    border-radius: 0 2px 1px 0;
  }

  .rotate {
    transform: rotate(0deg);
    transition: 0.2s ease-in-out;
  }

  .hidden {
    display: none;
  }
`;
