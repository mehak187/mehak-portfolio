import { profile, whatsappLink } from '../data/site'
import { WhatsAppIcon } from './Icons'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section className="section" id="contact" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <Reveal className="cta">
          <h2>Have a project in mind? Let's build it.</h2>
          <p>Message me on WhatsApp with a short description. I'll reply with ideas and a quote, no commitment.</p>
          <div className="cta-btns">
            <a className="btn btn-white" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon fill="#25d366" />WhatsApp {profile.phone}
            </a>
            <a className="btn btn-outline" href={`mailto:${profile.email}?subject=Project%20inquiry`}>Email me</a>
            <a className="btn btn-outline" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <p className="cta-note">{profile.email} · Usually replies within a few hours</p>
        </Reveal>
      </div>
    </section>
  )
}
