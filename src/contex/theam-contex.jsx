import { createContext, useEffect, useState } from "react"
import PropType from "prop-types"

const ThemeProviderContext = createContext()
 
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [theme, setTheme] = useState(
    () => (localStorage.getItem(storageKey)) || defaultTheme
  )
 
  useEffect(() => {
    const root = window.document.documentElement
 
    root.classList.remove("light", "dark")
 
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"
 
      root.classList.add(systemTheme)
      return
    }
 
    root.classList.add(theme)
  }, [theme])
 
  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }
 
  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

ThemeProvider.propTypes = {
    children: PropType.node,
    defaultTheme: PropType.oneOf(["light", "dark", "system"]),
    storageKey: PropType.string,
}