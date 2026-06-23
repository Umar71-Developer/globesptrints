import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Packages', href: '#packages' },
  { name: 'Features', href: '#features' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#hero" className={`text-2xl font-fakhwang font-bold transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
          GlobeSprints
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-poppins font-medium hover:text-orange-600 transition-colors duration-300 ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#cta" className="bg-orange-600 hover:bg-black text-white text-sm px-6 py-2.5 font-semibold rounded-md cursor-pointer transition-colors duration-300">
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden text-2xl cursor-pointer transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-poppins font-medium text-gray-700 hover:text-orange-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#cta" onClick={() => setMenuOpen(false)} className="bg-orange-600 hover:bg-black text-white text-sm text-center px-6 py-2.5 font-semibold rounded-md cursor-pointer transition-colors duration-300">
            Book Now
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header