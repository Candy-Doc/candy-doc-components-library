export enum ButtonSizes {
  sm = "sm",
  md = "md",
  xl = "xl",
}

export enum ButtonTypes {
  Primary = "Primary",
  Secondary = "Secondary",
  Danger = "Danger",
  Warn = "Warn",
}

export const buttonSize: { [key in ButtonSizes]: string } = {
  sm: "sm",
  md: "md",
  xl: "xl",
};

export const buttonType: { [key in ButtonTypes]: string } = {
  Primary: "primary",
  Secondary: "secondary",
  Danger: "danger",
  Warn: "warn",
};
