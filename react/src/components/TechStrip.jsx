import { techStack } from '../data/site'

export default function TechStrip() {
  // The list is repeated once so the marquee loops without a gap.
  const loop = [...techStack, ...techStack]

  return (
    <div className="strip" aria-label="Technologies">
      <div className="marquee">
        {loop.map((tech, i) => <span key={`${tech}-${i}`}>{tech}</span>)}
      </div>
    </div>
  )
}
