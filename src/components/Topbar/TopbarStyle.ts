import { css } from "lit";

export default css`
  .topbar-container {
    background-color: #fff;
    border-bottom: 1px solid rgb(229 231 235);
    flex: 1 1 0%;
    padding: 0.5rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    width: calc(100% / 6);
  }

  .navbar {
    width: calc(100% / 4);
  }
`;
