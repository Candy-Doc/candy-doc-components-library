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
  sm: "rounded text-xs px-2.5 py-1.5",
  md: "rounded-md text-sm px-4 py-2",
  xl: "rounded-md text-base px-6 py-3",
};

export const buttonType: { [key in ButtonTypes]: string } = {
  Primary: "text-white bg-blue-600 hover:bg-blue-700",
  Secondary: "text-blue-700 bg-blue-100 hover:bg-blue-200",
  Danger: "text-white bg-red-500 hover:bg-red-600",
  Warn: "bg-yellow-300 hover:bg-yellow-400",
};
