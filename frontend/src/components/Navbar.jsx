import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-indigo-600 tracking-tight">
          
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
              {link}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full hover:bg-indigo-700 transition-colors">
            Let's Talk
          </a>
        </div>

        <button className="md:hidden text-2xl text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t mt-4 px-6 py-4 space-y-3">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="block text-gray-600 font-medium py-2" onClick={() => setIsOpen(false)}>
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar