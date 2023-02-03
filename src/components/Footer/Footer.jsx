import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="w-full h-11 bg-black flex flex-row justify-center items-center gap-4 text-3xl text-white">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/Gabrieloncio">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/gabriel-mendez-m/">
      <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </footer>
  )
}

export default Footer
