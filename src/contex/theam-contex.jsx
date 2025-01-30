import { createContext, useContext, useEffect, useState } from "react";
import PropType from "prop-types";

const ThemeProviderContext = createContext();

export function ThemeProvider({
  children,
  defaultTheme = "light",  // Default to light theme
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  );
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove light and dark classes before adding the correct one
    root.classList.remove("light", "dark");

    // Add the selected theme (either light or dark)
    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme); // Store theme in localStorage
      setTheme(theme); // Update state
    },
    open,
    setOpen,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useGloble() {
  return useContext(ThemeProviderContext);
}

ThemeProvider.propTypes = {
  children: PropType.node,
  defaultTheme: PropType.oneOf(["light", "dark"]),  // Only light or dark now
  storageKey: PropType.string,
};
