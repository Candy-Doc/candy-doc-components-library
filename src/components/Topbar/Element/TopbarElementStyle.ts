import { css } from "lit";

export default css`
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }

  .title {
    transition: .3s;
  }

  li:hover {
    color: #3572EB;
    cursor: pointer;
  }

  .title::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: #3572EB;
    transition: .2s;
  }

  li:hover > .title::after {
    width: 100%;
  }

  ::slotted(*) {
    text-decoration: none;
    color: inherit;
    margin-left: .5rem;
    font-size: 1.5rem;
    transition: .2s;
  }
`;
