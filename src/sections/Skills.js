import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Heading from "../components/Heading"
import { GoTools } from "../components/Icons"
import * as styles from "./Skills.module.css"

const Skills = () => {

  const data = useStaticQuery(graphql`{
    allSkillsJson {
      edges {
        node {
          name
          tech {
            name
          }
          icon {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }`)

  return (
    <section className="group" id="skills">
      <Heading icon={GoTools} title="Skills" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.allSkillsJson.edges.map(({ node }) => (
          <div
            className={`skill ${styles.skill} group-hover:border-primary`}
          >
            <div className="flex auto items-center">
              {<GatsbyImage
                className="w-5 h-5 mr-5"
                image={node.icon.childImageSharp.gatsbyImageData}
              />}
              <div className="mr-5">
                <h6 className="text-xs font-semibold leading-none">
                  {node.name}
                </h6>
                <h6
                  className="mt-2 leading-none"
                  style={{ fontSize: "0.70rem" }}
                >
                  <div className="grid grid-flow-col auto-cols-max gap-x-2">
                    {node.tech.map(tech => (
                      <div key={tech.name}>{tech.name}</div>
                    ))}
                  </div>
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
