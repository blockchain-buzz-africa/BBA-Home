"use client";

import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";

type Props = {};

const DarkModeButton = (props: Props) => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="theme-switcher"
    >
      {theme === "light" ? <BsSun className="text-black" /> : <BsMoon className="text-white" />}
    </button>
  );
};

export default DarkModeButton;

