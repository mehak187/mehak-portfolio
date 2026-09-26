import { faqs } from '../data/content'
import Reveal from './Reveal'

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <Reveal className="section-head" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <span className="eyebrow">FAQ</span>
          <h2>Questions clients usually ask</h2>
        </Reveal>
        <Reveal className="faq">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
