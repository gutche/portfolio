import React from "react"
import * as styles from "./Subtitle.module.css"

const Subtitle = () => (
    <code className="w-full text-sm leading-loose">
      <div>
        <span className="text-blue-600">traits</span>
        [] <span className="text-yellow-400">gledrian</span>{" "}
        <span className="text-blue-600">=</span> {"{"}
      </div>
      <div className="lg:pl-8">
        <div className={`${styles.typewriter} text-red-500 w-auto`}>Software Engineer, Techie, Sports Aficionado, Anime fan...</div>{" "}
      </div>
      <div>{"}"};</div>
    </code>
)

export default Subtitle
