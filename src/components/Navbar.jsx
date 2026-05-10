import { useEffect } from 'react'

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar')
      const scrollProgress = document.getElementById('scrollProgress')

      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50)
      }
      if (scrollProgress) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        scrollProgress.style.width = (window.scrollY / docHeight) * 100 + '%'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav id="navbar">
      <a href="#inicio" className="nav-logo">
        <span className="first-text">Dev</span>
        <span className="second-text">Shalana</span>
      </a>
      <ul className="nav-links">
        <li><a href="#inicio">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
      <div className="scroll-progress" id="scrollProgress"></div>
    </nav>
  )
}

export default Navbar
