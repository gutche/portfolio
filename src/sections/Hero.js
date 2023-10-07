import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Subtitle from "../components/Subtitle"
import * as styles from "./Hero.module.css"

const Hero = () => {

  const data = useStaticQuery(graphql`{
    file(relativePath: {eq: "headshot.png"}) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
      name
    }
  }`)

  return (
    <section id="hero" className="min-h-screen flex items-center container">
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 row-gap-8 lg:gap-16 justify-center lg:justify-start items-center mt-8 md:mt-12 lg:mt-0">
        <div className="col-span-2">
          <div
            className="max-w-lg mx-auto"
          >
            <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt={data.file.name} />
          </div>
        </div>
        <div className="col-span-3">
          <h1 className="sr-only">
            Gledrian Gutierrez's Home on the Web; Universidad Rey Juan Carlos -
            Software Engineering
          </h1>

          <div
            className="text-center lg:text-left flex flex-col items-center lg:ml-4 lg:items-start"
          >
            <h1 className={`${styles.header} leading-tight`}>
              <span>Hi, I'm Gledrian</span>
            </h1>
            <Subtitle />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
