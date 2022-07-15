import ThemeContext from "../context/ThemeContext"
import React, { useContext } from "react"
import { IoIosMoon, IoIosSunny } from "react-icons/io"
import * as styles from "./Navigation.module.css"
import { animateScroll as scroll } from "react-scroll"
import { FaHome } from "./Icons"

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
      data-sal="slide-right"
      data-sal-duration="1000"
    >
      <div
        tabIndex={0}
        role="button"
        onKeyDown={scrollToTop}
        className="flex-center cursor-pointer"
        onClick={scrollToTop}
      >
        <FaHome size={25} />
      </div>
      <div
        aria-hidden="true"
        className="flex-center cursor-pointer hover:text-primary"
        onClick={toggleDark}
      >
        {dark ? <IoIosSunny size={25} /> : <IoIosMoon size={25} />}
      </div>
    </div>
  )
}

export default Navigation
