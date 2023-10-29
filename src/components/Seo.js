import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

const Seo = () => {
  const { site, file } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
      file(relativePath: {eq: "headshot.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `)

  const title = site.siteMetadata.title
  const description = site.siteMetadata.description
  const author = site.siteMetadata.author
  const image = file.childImageSharp.gatsbyImageData

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      defer={false}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ]}
    />
  )
}

export default Seo
