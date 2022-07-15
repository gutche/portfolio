import React from "react"

import "./src/css/tailwind.css"
import "./src/css/global.css"

import { ThemeProvider } from "./src/context/ThemeContext"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
