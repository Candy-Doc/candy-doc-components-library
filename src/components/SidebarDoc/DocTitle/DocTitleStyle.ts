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
    cursor: pointer;
  }

  .title-container {
    padding-bottom: 1rem;
  }

  p {
    all: unset;
    margin-left: 0.5rem;
  }

  .text-blue {
    color: rgb(37 99 235);
  }

  .text-blue .chevron:after, .text-blue .chevron:before {
    background: rgb(37 99 235);
  }

  .text-gray {
    color: rgb(70 70 70);
  }

  .title-childrens {
    margin-left: calc(0.5rem + 14px);
  }

  .chevron {
    position: relative;
    padding: 1px;
    height: 1px;
    width: 12px;
    top: -1px;
    transform: rotate(-90deg);
    transition: .2s ease-in-out;
  }

  .chevron:before {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    width: 50%;
    background: rgb(70 70 70);
    -webkit-transform: skew(0, 35deg);
    -moz-transform: skew(0, 35deg);
    -ms-transform: skew(0, 35deg);
    -o-transform: skew(0, 35deg);
    transform: skew(0, 35deg);
    border-radius: 2px 0 0 1px;
  }

  .chevron:after {
    content: '';
    position: absolute;
    left: 50%;
    height: 100%;
    width: 50%;
    background: rgb(70 70 70);
    -webkit-transform: skew(0, -35deg);
    -moz-transform: skew(0, -35deg);
    -ms-transform: skew(0, -35deg);
    -o-transform: skew(0, -35deg);
    transform: skew(0, -35deg);
    border-radius: 0 2px 1px 0;
  }

  .rotate {
    transform: rotate(0deg);
    transition: .2s ease-in-out;
  }
`;
