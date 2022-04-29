export enum IconSizes {
  sm = "sm",
  md = "md",
  xl = "xl",
}

export const iconSize: { [key in IconSizes]: string } = {
  sm: "text-xs",
  md: "text-base",
  xl: "text-2xl",
};
