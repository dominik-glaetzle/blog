import { useEffect, useState } from "react";
import { ToggleButton } from "./ToggleButton";

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // load dark mode from local storage
  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";

    if (isDark) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // switch on dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", String(newMode));
    document.documentElement.classList.toggle("dark", newMode);
  };

  return <ToggleButton checked={darkMode} onChange={toggleDarkMode} />;
};
