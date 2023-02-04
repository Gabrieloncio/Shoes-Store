import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const URL = useLocation().pathname

  return (
    <footer className={`w-full h-11 bg-black flex-row justify-center items-center gap-4 text-3xl text-white ${!(URL.includes('home')|| URL === '/') ? 'flex' : 'hidden'}`}>
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
