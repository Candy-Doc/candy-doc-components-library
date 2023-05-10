import { css } from "lit";

export default css`
  .sidebar-container {
    display: flex;
    height: 100%;
    border-right: 1px rgb(229 231 235);
    padding-top: 1.25rem;
    background-color: #fff;
    overflow-y: auto;
  }

  nav {
    flex: 1 1 0%;
    padding: 0 0.5rem 1rem 0.5rem;
  }

  nav * {
    margin-top: 0.25rem;
  }
`;
