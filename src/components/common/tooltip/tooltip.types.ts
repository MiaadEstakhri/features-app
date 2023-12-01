export type ColorTypes = {
  [key: string]: string;
};

export const Colors: ColorTypes = {
  primary: "#3d4a8f",
  "primary-dark": "#141f5b",
  secondary: "#00798c",
  "secondary-light": "#85cd95",
  "secondary-dark": "#03353d",
  success: "#00c853",
  info: "#126eab",
  warning: "#ffc107",
  gold: "goldenrod",
  notice: "#ff8c00",
  danger: "#dc2633",
};

export type TooltipProps = {
  content: string;
  children: React.ReactNode;
  position: string;
  textColor: string;
  backgroundColor: string;
  direction: string;
};
