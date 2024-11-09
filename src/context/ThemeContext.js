import React, { useState, useEffect, createContext } from "react"

const ThemeContext = createContext({
  dark: true,
  toggleDark: () => {},
})

const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    const storedDark = JSON.parse(localStorage.getItem("dark"))
    return storedDark !== null ? storedDark : supportsDarkMode()
  })

  const toggleDark = () => {
    setDark(prevDark => {
      const newDark = !prevDark
      localStorage.setItem("dark", JSON.stringify(newDark))
      return newDark
    })
  }

  useEffect(() => {
    const storedDark = JSON.parse(localStorage.getItem("dark"))
    if (storedDark !== null) {
      setDark(storedDark)
    } else if (supportsDarkMode()) {
      setDark(true)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
