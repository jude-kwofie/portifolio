import React from "react";
import { useTheme } from "../context";

export const Switch: React.FC = () => {
  const { toggleTheme } = useTheme();
  const handleClick = () => {
    toggleTheme();
  };

  return <button onClick={handleClick}>hello</button>;
};
