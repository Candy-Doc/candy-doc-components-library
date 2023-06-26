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

export const floatingButtonPositionMap: Record<
  FloatingButtonsPosition,
  (x: number, y: number) => string
> = {
  tl: (x, y) => `top: ${y.toString()}px; left: ${x.toString()}px;`,
  tr: (x, y) => `top: ${y.toString()}px; right: ${x.toString()}px;`,
  br: (x, y) => `bottom: ${y.toString()}px; right: ${x.toString()}px;`,
  bl: (x, y) => `bottom: ${y.toString()}px; left: ${x.toString()}px;`,
};

export const floatingButtonAnchor: { [anchor in FloatingButtonAnchor]: string } = {
  window: "window",
  parent: "parent",
};
