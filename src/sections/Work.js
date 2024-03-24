import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import Heading from "../components/Heading"
import { MdLocationOn, MdWork } from "../components/Icons"

const Work = () => {
  const [max, setMax] = useState(2)
  const data = useStaticQuery(graphql`
    {
      allWorkJson {
        edges {
          node {
            id
            title
            subtitle
            period
            location
            specialization
            icon {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section id="work">
      <Heading icon={MdWork} title="Work" />

      {/* <div className="bg-primary-800 text-white rounded p-6 mb-8 lg:mr-12">
        Announcement
      </div> */}

      <div className="flex">
        <div className="w-1 bg-gray-500 rounded-full md:ml-6 opacity-25" />
        <div className="-ml-2">
          {data.allWorkJson.edges.map(({ node }, index) => {
            if (index >= max) return null

            return (
              <div
                key={node.id}
                className="py-4 flex wow fadeInDown"
                style={{
                  animationDuration: `${index * 200 + 500}ms`,
                }}
              >
                <div className="ml-8">
                  <GatsbyImage
                    className="w-8 h-8"
                    image={node.icon.childImageSharp.gatsbyImageData}
                    alt={node.title}
                  />
                  <div className="mt-3 flex items-baseline">
                    <h6 className="font-semibold">{node.title}</h6>
                  </div>
                  <h6 className="text-sm mb-1">{node.subtitle}</h6>
                  <h6 className="text-xs mb-3">({node.period})</h6>
                  <div className="mt-2 flex items-center">
                    <MdLocationOn size="0.75rem" />
                    <h6 className="font-semibold text-xs ml-2">
                      {node.location}
                    </h6>
                  </div>
                  <h6 className="text-xs mt-2">
                    {/* <strong>Worked with:</strong>*/} {node.specialization}
                  </h6>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {max <= 2 && <div className="ml-12 mt-4 rounded-lg py-2 flex"></div>}
    </section>
  )
}

export default Work
