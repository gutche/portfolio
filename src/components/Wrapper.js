import React from "react"
import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import Navigation from "./Navigation"
import * as styles from "./Wrapper.module.css"

const Wrapper = ({ children }) => {
  const { dark } = useContext(ThemeContext)

  return (
    <div className={dark ? styles.dark : styles.light}>
      <Navigation />
      <div className="mx-8 lg:mx-16 xl:mx-0">{children}</div>
    </div>
  )
}

export default Wrapper
