import React, { useContext } from "react"
import * as styles from "./Button.module.css"
import ThemeContext from "../context/ThemeContext"

const Button = ({ type, className, icon, title, onClick, disabled }) => {
  const { dark } = useContext(ThemeContext)
  const Icon = icon

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.container} ${className} ${!dark && styles.light}`}
    >
      <div>
        <Icon />
        <h6>{title}</h6>
      </div>
      <div />
    </button>
  )
}

export default Button
