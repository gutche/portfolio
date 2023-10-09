import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Heading from "../components/Heading"
import { MdSchool } from "../components/Icons"

const Education = () => {

  const data = useStaticQuery(graphql`{
    allEducationJson {
      edges {
        node {
          id
          subtitle
          title
          period
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
    <section id="education">
      <Heading icon={MdSchool} title="Education" />

      <div className="flex">
        <div className="w-1 bg-gray-500 rounded-full md:ml-6 opacity-25" />
        <div className="-ml-2">
          {data.allEducationJson.edges.map(({ node }) => {
            return (
              <div
                className="py-4 flex"
              >
                <div className="ml-8">
                  {<GatsbyImage
                    className="w-8 h-8"
                    image={node.icon.childImageSharp.gatsbyImageData}
                    alt={node.title}
                  />}
                  <h6 className="mt-3 font-semibold">{node.title}</h6>
                  <h6 className="text-sm">{node.subtitle}</h6>
                  <h6 className="mt-2 text-xs">({node.period})</h6>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Education
