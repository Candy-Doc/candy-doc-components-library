import { css } from "lit";
export default css`
  .popover {
    display: inline-flex;
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .popover-container {
    position: absolute;
    min-width: 50px;
    height: 50px;
    z-index: 99;
  }

  .popover-content {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    position: relative;
    background-color: white;
    border-radius: 10px;
    height: 100%;
    width: 100%;
  }

  .popover-hide {
    visibility: hidden;
  }

  .popover-arrow {
    width: 16px;
    height: 16px;
    transform: rotate(45deg);
    position: absolute;
    z-index: 99;
    background-color: white;
  }

  .popover-right,
  .popover-left {
    margin-top: auto;
    margin-bottom: auto;
    bottom: 0;
    top: 0;
  }

  .popover-right {
    left: calc(100% + 20px);
  }

  .popover-left {
    right: calc(100% + 20px);
  }


  .popover-top {
    bottom: calc(100% + 20px);
  }

  .popover-bottom {
    top: calc(100% + 20px);
  }

  .popover-arrow-right,
  .popover-arrow-left {
    margin-top: auto;
    margin-bottom: auto;
    bottom: 0;
    top: 0;
  }

  .popover-arrow-right {
    left: -8px;
  }

  .popover-arrow-left {
    right: -8px;
  }

  .popover-arrow-top,
  .popover-arrow-bottom {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }

  .popover-arrow-top {
    bottom: -8px;
  }

  .popover-arrow-bottom {
    top: -8px;
  }

  .cursor-pointer:hover {
    cursor: pointer;
  }
`;