export enum FloatingButtonsPosition {
  tl = "tl",
  tr = "tr",
  br = "br",
  bl = "bl",
}

export enum FloatingButtonAnchor {
  window = "window",
  parent = "parent",
}

export const floatingButtonPosition: { [position in FloatingButtonsPosition]: string } = {
  tl: "top left",
  tr: "top right",
  br: "bottom right",
  bl: "bottom left",
};

export const floatingButtonAnchor: { [anchor in FloatingButtonAnchor]: string } = {
  window: "window",
  parent: "parent",
};
