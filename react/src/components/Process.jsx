import { steps } from '../data/content'
import Reveal from './Reveal'

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">How we work together</span>
          <h2>Simple process. No guesswork.</h2>
        </Reveal>
        <div className="steps">
          {steps.map((step) => (
            <Reveal className="step" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <small>{step.note}</small>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
