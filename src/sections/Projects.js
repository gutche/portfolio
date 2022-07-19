import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import React from "react"
import Heading from "../components/Heading"
import Button from "../components/Button"
import { FaDev, FaGithub, FaLink } from "../components/Icons"
import * as styles from "./Projects.module.css"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            title
            description
            tags
            website
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section id="projects">
      <Heading icon={FaDev} title="Projects" />

      <div className={styles.container}>
        {data.allProjectsJson.edges.map(({ node }, index) => (
          <div
            key={node.id}
            data-sal="zoom-in"
            data-sal-duration="500"
            data-sal-delay={index * 300 + 300}
            className={`${styles.project}`}
          >
            <OutboundLink
              href={node.website || node.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-48 bg-black relative flex-center cursor-pointer rounded-lg shadow-lg"
            >
              <FaLink className="absolute" color="#FFF" size="5rem" />
              <GatsbyImage
                className="absolute w-full h-full object-cover rounded-lg hover:opacity-50 duration-200"
                {...node.image.childImageSharp}
              />
              <span className="sr-only">{node.title}</span>
            </OutboundLink>
            <h5 className="mt-4 font-semibold text-center">{node.title}</h5>
            <p className="mt-2 pb-5 text-sm text-justify">{node.description}</p>
          </div>
        ))}
      </div>

      <Button
        className="m-0"
        icon={FaGithub}
        title="More on GitHub"
        onClick={() => window.open("https://github.com/gutche", "_blank")}
      />
    </section>
  )
}

export default Projects
