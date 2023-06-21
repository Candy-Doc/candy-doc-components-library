export enum FloatingButtonsPosition {
  tl = "tl",
  tr = "tr",
  br = "br",
  bl = "bl",
}

export const floatingButtonPosition: { [position in FloatingButtonsPosition]: string } = {
  tl: "top left",
  tr: "top right",
  br: "bottom right",
  bl: "bottom left",
};
