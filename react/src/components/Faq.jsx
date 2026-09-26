import { useState } from 'react'
import { faqs } from '../data/content'
import Reveal from './Reveal'

export default function Faq() {
  // Only one answer stays open at a time.
  const [open, setOpen] = useState(null)

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <Reveal className="section-head" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <span className="eyebrow">FAQ</span>
          <h2>Questions clients usually ask</h2>
        </Reveal>
        <Reveal className="faq">
          {faqs.map((item, i) => (
            <details
              key={item.q}
              name="faq"
              open={open === i}
              onToggle={(e) => {
                if (e.currentTarget.open) setOpen(i)
                else if (open === i) setOpen(null)
              }}
            >
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
