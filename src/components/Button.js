import React, { useContext } from "react"
import * as styles from "./Button.module.css"
import ThemeContext from "../context/ThemeContext"

const Button = ({ type, className, icon, title, onClick, disabled }) => {
  
  const Icon = icon
  const { dark } = useContext(ThemeContext)

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.container} ${className}`}
    >
      <div className={dark? styles.dark : styles.light}>
        <Icon />
        <h6>{title}</h6>
      </div>
    </button>
  )
}

export default Button
