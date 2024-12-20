import { OutboundLink } from "gatsby-plugin-google-gtag"
import React from "react"
import social from "../data/social"
import * as styles from "./Social.module.css"

const Social = () => {
  return (
    <div className={styles.container}>
      {social.map(x => {
        const Icon = x.icon

        return (
          <OutboundLink
            href={x.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${x.class}`}
            key={x.title}
          >
            <Icon color="#FFF" size="0.9em" />
            <span className="sr-only">{x.title}</span>
          </OutboundLink>
        )
      })}
    </div>
  )
}

export default Social
