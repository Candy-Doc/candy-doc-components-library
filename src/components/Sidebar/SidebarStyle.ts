import { css } from "lit";

export default css`
  .sidebar-container {
    display: flex;
    height: 100%;
    border-right: 1px rgb(229 231 235);
    padding-top: 1rem;
    background-color: transparent;
    border-radius: 10px;
    overflow-y: auto;
  }

  .sidebar-mini {
    width: 3rem;
  }

  section {
    flex: 1 1 0%;
    padding: 0 0.5rem 1rem 0.5rem;
  }

  .icon-container {
    align-items: center;
    padding: 0.5rem;
  }

  .icon-container:hover {
    cursor: pointer;
  }

  img {
    width: 16px;
    height: 16px;
  }
`;
