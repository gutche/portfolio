import React from "react"
import Typist from "react-typist"

const Subtitle = ({ onDone }) => (
  <Typist
    startDelay={500}
    avgTypingDelay={30}
    cursor={{ show: false }}
    className="my-2 flex lg:h-32"
    onTypingDone={onDone}
  >
    <code className="w-full text-sm leading-loose">
      <div>
        <span className="text-blue-600">traits</span>
        [] <span className="text-yellow-400">gledrian</span>{" "}
        <span className="text-blue-600">=</span> {"{"}
      </div>
      <div className="lg:pl-8">
        <span className="text-red-500">Software Engineer</span>,{" "}
        <span className="text-red-500">Techie</span>,{" "}
        <span className="text-red-500">Sports Aficionado</span>,{" "}
        <span className="text-red-500">Anime fan</span>,{" "}
      </div>
      <div className="lg:pl-8">
        <span className="text-red-500">...</span>{" "}
      </div>
      <div>{"}"};</div>
    </code>
  </Typist>
)

export default Subtitle
