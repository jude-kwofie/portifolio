import React from "react";
import { useTheme } from "../context";
import { TransparentButton } from "./common";
import { DarkMode, LightMode } from "@mui/icons-material";

export const Switch: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const handleClick = () => {
    toggleTheme();
  };

  return (
    <TransparentButton onClick={handleClick}>
      {theme == "light" ? (
        <DarkMode className="mode" />
      ) : (
        <LightMode className="mode" />
      )}
    </TransparentButton>
  );
};
