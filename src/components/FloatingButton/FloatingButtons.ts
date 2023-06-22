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
  tl: (x: number, y: number) => `top: ${y.toString()}px; left: ${x.toString()}px;`,
  tr: (x: number, y: number) => `top: ${y.toString()}px; right: ${x.toString()}px;`,
  br: (x: number, y: number) => `bottom: ${y.toString()}px; right: ${x.toString()}px;`,
  bl: (x: number, y: number) => `bottom: ${y.toString()}px; left: ${x.toString()}px;`,
};

export const floatingButtonAnchor: { [anchor in FloatingButtonAnchor]: string } = {
  window: "window",
  parent: "parent",
};
