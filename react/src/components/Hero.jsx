import { useEffect, useRef, useState } from 'react'
import { paymentSplit, stats, whatsappLink } from '../data/site'
import { icons, WhatsAppIcon } from './Icons'
import Reveal from './Reveal'
import Aurora from './Aurora'

function Counter({ value, suffix }) {
  const [shown, setShown] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setShown(value)
      return
    }
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / 1400, 1)
        setShown(Math.round(value * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => io.disconnect()
  }, [value])

  return <b ref={ref}>{shown}{suffix}</b>
}

function SplitCard() {
  const [go, setGo] = useState(false)

  return (
    <Reveal className="split-wrap" onShow={() => setTimeout(() => setGo(true), 300)}>
      <div className={`split ${go ? 'go' : ''}`} data-tilt>
        <div className="float-tag t1">
          <span className="ic">{icons.check}</span>
          <div><b>Payout sent</b><br /><span style={{ color: 'var(--ink-3)' }}>to 4 accounts</span></div>
        </div>
        <div className="split-top">
          <span className="mono">stripe_connect / payment_intent</span>
          <span className="badge">● succeeded</span>
        </div>
        <div className="split-amount">{paymentSplit.amount}</div>
        <div className="split-label">One customer payment, split automatically</div>
        <div className="rows">
          {paymentSplit.rows.map((row) => (
            <div className="row" key={row.name}>
              <span className="row-name"><i style={{ background: row.color }} />{row.name}</span>
              <span className="row-val">{row.value}</span>
              <div className="bar"><span style={{ '--w': row.width, background: row.color }} /></div>
            </div>
          ))}
        </div>
        <div className="split-foot">
          <span>Laravel 11 · Stripe Connect · Webhooks</span>
          <span>Example flow from a live project</span>
        </div>
        <div className="float-tag t2">
          <span className="ic">{icons.chart}</span>
          <div><b>Thousands</b> of<br />transactions monthly</div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Hero() {
  return (
    <header className="hero" id="top">
      <Aurora />
      <div className="wrap hero-grid">
        <div>
          <Reveal className="status"><span className="dot" />Available for new projects</Reveal>
          <Reveal as="h1">I build the <em>Laravel</em> apps that run real businesses.</Reveal>
          <Reveal as="p" className="hero-sub">
            Senior Laravel and React developer. For 5 years I've built marketplaces, SaaS platforms and Stripe
            payment systems for clients in the US and around the world. You get senior code, clear updates and a
            product that ships.
          </Reveal>
          <Reveal className="hero-cta">
            <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />Chat on WhatsApp
            </a>
            <a className="btn btn-ghost" href="#work">See my work{icons.arrowRight}</a>
          </Reveal>
          <Reveal className="stats">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <Counter value={stat.value} suffix={stat.suffix} />
                <span>{stat.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
        <SplitCard />
      </div>
    </header>
  )
}
