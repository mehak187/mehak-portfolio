import { reasons } from '../data/content'
import Reveal from './Reveal'

export default function Why() {
  return (
    <section className="section dark-sec">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Why clients work with me</span>
          <h2>Senior quality without the agency overhead.</h2>
          <p>You talk directly to the developer writing your code. No account managers, no juniors, no surprises.</p>
        </Reveal>
        <Reveal className="why">
          {reasons.map((reason, i) => (
            <div key={reason.title}>
              <div className="num">{String(i + 1).padStart(2, '0')}</div>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
