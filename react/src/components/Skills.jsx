import { skills } from '../data/content'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Tech stack</span>
          <h2>Everything I work with.</h2>
          <p>Five years of production work across the Laravel and React ecosystem, plus the services around them.</p>
        </Reveal>
        <div className="skills">
          {skills.map((group) => (
            <Reveal className="skill-group spot" key={group.group}>
              <h3>{group.group}</h3>
              <div className="skill-chips">
                {group.items.map((item) => <span className="chip" key={item}>{item}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
