import { css } from "lit";

export default css`
  .topbar-container {
    background-color: transparent;
    flex: 1 1 0%;
    padding: 0.5rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 3rem;
    color: black;
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

  a:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    ul {
      column-gap: 5rem;
    }
  }

  #topbar-burger {
    display: flex;
    width: 2rem;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    background: transparent;
    border: 0;
    position: relative;
    z-index: 102;
  }

  #topbar-burger:hover,
  .topbar-drawer-backdrop {
    cursor: pointer;
  }

  #topbar-burger > span {
    width: 100%;
    height: 0.15rem;
    background: black;
    transform-origin: right center;
    transition: all 0.15s linear 0s;
  }

  #topbar-burger.active > span:nth-child(1) {
    transform: rotate(-45deg);
  }

  #topbar-burger.active > span:nth-child(2) {
    opacity: 0;
  }

  #topbar-burger.active > span:nth-child(3) {
    transform: rotate(45deg);
  }

  .topbar-drawer {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 15rem;
    height: 100vh;
    z-index: 101;
    background-color: transparent;
    transition: 0.15s ease-out;
  }

  .topbar-drawer-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(100, 100, 100, 0.4);
    z-index: 101;
  }

  .topbar-drawer-content {
    background-color: white;
    position: absolute;
    top: 0;
    overflow-y: scroll;
    left: -15rem;
    height: 100%;
    width: 15rem;
    z-index: 102;
    transition: 0.15s ease-out;
    box-shadow: 1px 1px 20px rgba(175, 175, 175, 0.5);
  }

  .topbar-drawer-box {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
  }

  .topbar-drawer.topbar-drawer-active > .topbar-drawer-backdrop {
    animation: fadeIn 0.15s forwards;
  }

  .topbar-drawer.topbar-drawer-close > .topbar-drawer-backdrop {
    animation: fadeOut 0.15s forwards;
  }

  .topbar-drawer.topbar-drawer-active > .topbar-drawer-content {
    animation: translateIn 0.15s forwards;
  }

  .topbar-drawer.topbar-drawer-close > .topbar-drawer-content {
    animation: translateOut 0.15s forwards;
  }

  @keyframes fadeIn {
    from {
      background-color: rgba(100, 100, 100, 0);
    }

    to {
      background-color: rgba(100, 100, 100, 0.4);
      backdrop-filter: blur(4px);
    }
  }

  @keyframes fadeOut {
    from {
      background-color: rgba(100, 100, 100, 0.4);
    }

    to {
      background-color: rgba(100, 100, 100, 0);
    }
  }

  @keyframes translateIn {
    from {
      transform: translateX(0%);
    }

    to {
      transform: translateX(100%);
    }
  }

  @keyframes translateOut {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(0%);
    }
  }

  .display-none {
    display: none;
  }
`;
