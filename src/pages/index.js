import React from "react"
import Wrapper from "../components/Wrapper"
import Education from "../sections/Education"
import Footer from "../sections/Footer"
import Hero from "../sections/Hero"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"
import * as styles from "./index.module.css"
import { ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material"
import Seo from "../components/Seo"

const IndexPage = () => {
  const theme = createTheme({})

  return (
    <>
    <head>
      <Seo/>
    </head>
    <body>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <div className={`container ${styles.layout}`}>
            <Hero />
            <Projects />
            <Skills />
            <Education />
            <Footer />
          </div>
        </Wrapper>
      </ThemeProvider>
    </body>
    </>
  )
}

export default IndexPage
