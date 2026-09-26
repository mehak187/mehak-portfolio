import { services } from '../data/content'
import { icons } from './Icons'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">What I build</span>
          <h2>From idea to a working product your customers pay for.</h2>
          <p>I take full ownership: database, backend, APIs, admin panel and frontend. One developer, the whole picture.</p>
        </Reveal>
        <div className="services">
          {services.map((service) => (
            <Reveal className={`card ${service.featured ? 'featured' : ''}`} key={service.title}>
              <div className="ic">{icons[service.icon]}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
