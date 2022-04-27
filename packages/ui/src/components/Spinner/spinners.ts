export enum SpinnerSizes {
  sm = "sm",
  md = "md",
  xl = "xl",
}

export const spinnerSize: { [key in SpinnerSizes]: string } = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  xl: "h-12 w-12",
};
