import { css } from "lit";

export default css`
  .sidebar-doc-container {
    display: flex;
    height: 100%;
    border-right: 1px rgb(229 231 235);
    padding-top: 1rem;
    background-color: transparent;
    border-radius: 10px;
    overflow-y: auto;
  }

  section {
    flex: 1 1 0%;
    padding: 0 0.5rem 1rem 0.5rem;
  }
`;
