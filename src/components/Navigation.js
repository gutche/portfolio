import ThemeContext from "../context/ThemeContext"
import React, { useContext } from "react"
import { IoIosMoon, IoIosSunny, IoIosRocket } from "./Icons"
import * as styles from "./Navigation.module.css"
import { animateScroll as scroll } from "react-scroll"


const Navigation = () => {
  const { dark, toggleDark } = useContext(ThemeContext)

  const scrollToTop = () =>
    scroll.scrollToTop({
      delay: 50,
      duration: 600,
      smooth: "easeInOutCubic",
    })

  return (
    <div
      className={`${styles.container}`}
    >
      <div
        tabIndex={0}
        role="button"
        onKeyDown={scrollToTop}
        className="flex-center cursor-pointer hover:text-primary"
        onClick={scrollToTop}
      >
        <IoIosRocket size={25} />
      </div>
      <div
        tabIndex={0}
        role="button"
        onKeyDown={toggleDark}
        className="flex-center cursor-pointer hover:text-primary"
        onClick={toggleDark}
      >
        {dark ? <IoIosSunny size={25} /> : <IoIosMoon size={25} />}
      </div>
    </div>
  )
}

export default Navigation
