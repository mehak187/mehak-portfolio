import { facts, profile, timeline } from '../data/site'
import Reveal from './Reveal'

export default function About() {
  return (
    <section className="section" id="about" style={{ background: 'var(--bg-alt)' }}>
      <div className="wrap about">
        <Reveal className="about-card">
          <div className="avatar">{profile.initials}</div>
          <h3>{profile.name}</h3>
          <p className="role">{profile.role}</p>
          <div className="facts">
            {facts.map(([label, value]) => (
              <div className="fact" key={label}>
                <span>{label}</span>
                <b>{value}</b>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="about-text">
          <Reveal as="span" className="eyebrow">About me</Reveal>
          <Reveal as="p">
            I'm a <strong>senior full stack developer</strong> who loves turning complicated business rules into
            software that just works.
          </Reveal>
          <Reveal as="p">
            Most of my work is the kind that can't break: <strong>payment systems that split money between five
            parties</strong>, marketplaces with thousands of transactions a month, and APIs that power mobile apps.
            I've built <strong>30+ full Laravel applications</strong> and <strong>35+ frontends</strong> across industries.
          </Reveal>
          <Reveal as="p">
            I started as a frontend developer writing pixel perfect CSS, so I care about how things look as much as
            how they run.
          </Reveal>
          <div className="timeline">
            {timeline.map((job) => (
              <Reveal className="tl" key={job.when}>
                <span className="when">{job.when}</span>
                <h4>{job.title}</h4>
                <p>{job.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
