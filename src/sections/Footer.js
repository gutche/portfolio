import React from "react"
import Heading from "../components/Heading"
import { FaInfoCircle} from "../components/Icons"
import { useStaticQuery, graphql } from "gatsby"
import Social from "../components/Social"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { id: { eq: "about-gledrian" } }) {
        html
      }
    }
  `)

  return (
    <section id="footer">
      <Heading icon={FaInfoCircle} title="About gledrian.dev" />

      <div
        className="text-justify w-full md:w-4/5 lg:w-3/4 -mb-4"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />

      <div className="w-full md:w-auto h-6 my-6">{<Social />}</div>

      <div className="pt-8 pb-8 text-xs leading-relaxed opacity-25">
        <div>Copyleft {new Date().getFullYear()} Gledrian</div>
      </div>
    </section>
  )
}

export default Footer
