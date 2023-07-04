import { css } from "lit";

export default css`
  .popover-container {
    position: absolute;
    top: 0px;
    left: 0px;
    min-width: 50px;
    height: 50px;
  }

  .popover-content {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    position: relative;
    background-color: white;
    border-radius: 10px;
    height: 100%;
    padding: 0 0.75rem;
  }

  .popover-hide {
    visibility: hidden;
  }

  .popover-arrow {
    width: 16px;
    height: 16px;
    transform: rotate(45deg);
    position: absolute;
    z-index: 1000;
    background-color: white;
  }

  .popover-right {
    left: -8px;
    top: calc(50% - 8px);
  }

  .popover-left {
    right: -8px;
    top: calc(50% - 8px);
  }

  .popover-top {
    left: calc(50% - 8px);
    bottom: -8px;
  }

  .popover-bottom {
    top: -8px;
    left: calc(50% - 8px);
  }
`;