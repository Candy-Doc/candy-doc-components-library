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
    min-height: 3rem;
  }

  .logo {
    width: 10rem;
    min-width: 10rem;
  }

  .logo-reduced {
    width: 2.5rem;
    min-width: 2.5rem;
  }

  .navbar {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }

  ul {
    list-style-type: none;
    display: flex;
    column-gap: 2rem;
    padding: 0.5rem;
    margin: 0;
    flex-wrap: wrap;
  }

  ::slotted(*) {
    display: flex;
    align-content: center;
    justify-content: center;
  }

  @media (min-width: 768px) {
    ul {
      column-gap: 5rem;
    }
  }
`;
