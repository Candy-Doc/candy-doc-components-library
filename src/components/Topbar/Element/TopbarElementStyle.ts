import { css } from "lit";

export default css`
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }

  .title {
    transition: 0.3s;
  }

  li:hover {
    color: #3572eb;
    cursor: pointer;
  }

  .title::after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    background: #3572eb;
    transition: 0.2s;
  }

  li:hover > .title::after {
    width: 100%;
  }

  ::slotted(*) {
    text-decoration: none;
    color: inherit;
    margin-left: 0.5rem;
    font-size: 1.5rem;
    transition: 0.2s;
  }
`;
