import { alsoBuilt, featured, moreWork } from '../data/projects'
import { ExternalIcon } from './Icons'
import Reveal from './Reveal'

function Project({ project }) {
  return (
    <Reveal
      as="article"
      className={`proj spot ${project.wide ? 'wide' : ''}`}
      style={{ '--tint': project.tint, '--tint-ink': project.tintInk }}
    >
      <div className="shot">
        <div className="win">
          <div className="win-bar">
            <i /><i /><i />
            <span className="url">{project.shown}</span>
          </div>
          <img className="win-img" src={project.img} alt={`${project.title} screenshot`} loading="lazy" />
        </div>
      </div>
      <div className="proj-body">
        <div className="proj-meta">{project.meta}</div>
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        {project.points && (
          <ul>
            {project.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        )}
        <div className="chips">
          {project.chips.map((chip) => <span className="chip" key={chip}>{chip}</span>)}
        </div>
        <a className="proj-link" href={project.url} target="_blank" rel="noopener noreferrer">
          {project.urlLabel}<ExternalIcon />
        </a>
      </div>
    </Reveal>
  )
}

export default function Work() {
  return (
    <section className="section" id="work" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Selected work</span>
          <h2>Real products, used by real customers.</h2>
          <p>A few highlights from 80+ delivered projects for clients in the US, UK, Spain, Oman, Morocco and the UAE.</p>
        </Reveal>

        <div className="work">
          {featured.map((project) => <Project project={project} key={project.title} />)}
        </div>

        <Reveal as="h3" className="sub-head">More live work</Reveal>
        <Reveal className="mini">
          {moreWork.map((item) => (
            <a className="mini-card" href={item.url} target="_blank" rel="noopener noreferrer" key={item.title} data-tilt>
              <div className="mini-shot">
                <img src={item.img} alt={`${item.title} screenshot`} loading="lazy" />
              </div>
              <div className="mini-top">
                <h4>{item.title}</h4>
                <span className="arrow">↗</span>
              </div>
              <p>{item.text}</p>
              <span className="mini-tag">{item.tag}</span>
            </a>
          ))}
        </Reveal>

        <Reveal className="more">
          <b>Also built for private clients:</b>
          {alsoBuilt.map((item) => <span key={item}>{item}</span>)}
        </Reveal>
        <Reveal as="p" className="demo-note">Admin demo access for any platform is available on request.</Reveal>
      </div>
    </section>
  )
}
