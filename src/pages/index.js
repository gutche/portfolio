import React from "react"
import Wrapper from "../components/Wrapper"
import Education from "../sections/Education"
import Footer from "../sections/Footer"
import Hero from "../sections/Hero"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"
import * as styles from "./index.module.css"
import Seo from "../components/Seo"

const IndexPage = () => {

  return (
    <>
    <head>
      <Seo/>
    </head>
    <body>
        <Wrapper>
          <div className={`container ${styles.layout}`}>
            <Hero />
            <Projects />
            <Skills />
            <Education />
            <Footer />
          </div>
        </Wrapper>
    </body>
    </>
  )
}

export default IndexPage
