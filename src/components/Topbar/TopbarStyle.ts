import { css } from "lit";

export default css`
  .topbar-container {
    background-color: #fff;
    flex: 1 1 0%;
    padding: 0.5rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-height: 3rem;
  }

  .logo {
    width: 10rem;
  }

  .navbar {
    width: 100%;
    display: flex;
    justify-content: end;
    overflow: hidden;
  }

  ul {
    list-style-type: none;
    display: flex;
  }

  ::slotted(*) {
    padding-left: 2rem;
    display: flex;
    align-content: center;
    justify-content: center;
  }

  @media (min-width: 768px) {
    ::slotted(*) {
      padding-left: 5rem;
    }
  }
`;
