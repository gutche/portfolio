import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import React from "react"
import Subtitle from "../components/Subtitle"
import * as styles from "./Hero.module.css"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "photo.png" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section id="hero" className="min-h-screen flex items-center container">
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 row-gap-8 lg:gap-16 justify-center lg:justify-start items-center mt-8 md:mt-12 lg:mt-0">
        <div className="col-span-2">
          <div
            className="max-w-lg mx-auto"
            data-depth="0.4"
            data-sal="slide-down"
            data-sal-duration="1000"
          >
            <GatsbyImage {...data.photo.childImageSharp} />
          </div>
        </div>
        <div className="col-span-3">
          <h1 className="sr-only">
            Gledrian Gutierrez's Home on the Web; Universidad Rey Juan Carlos -
            Software Engineering
          </h1>

          <div
            className="text-center lg:text-left flex flex-col items-center lg:ml-4 lg:items-start"
            data-sal="slide-down"
            data-sal-delay="500"
            data-sal-duration="1000"
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
