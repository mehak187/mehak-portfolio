import { profile, whatsappLink } from '../data/site'
import { WhatsAppIcon } from './Icons'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrap foot">
          <span>© {new Date().getFullYear()} {profile.name}. Laravel and React Developer.</span>
          <div className="foot-links">
            <a href="#work">Work</a>
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>

      <a className="wa-float" href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <WhatsAppIcon />
      </a>
    </>
  )
}
