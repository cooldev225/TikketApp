import React from "react";
import { IconList } from "./svg/icon-list";

export const Icon: React.FC<IconProps> = ({
  name,
  color = "currentColor",
  width,
}) => {
  return React.createElement(IconList[name], { color, width }) || null;
};
