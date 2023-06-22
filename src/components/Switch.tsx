import React from "react";
import { useTheme } from "../context";
import { TransparentButton } from "./common";

export const Switch: React.FC = () => {
  const { toggleTheme } = useTheme();
  const handleClick = () => {
    toggleTheme();
  };

  return <TransparentButton onClick={handleClick}>hello</TransparentButton>;
};
