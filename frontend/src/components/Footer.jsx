import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FaXTwitter, FaFacebook } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="py-10 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-sm">© 2026 Swastik Poudel.  All rights reserved.</p>
        
        <div className="flex items-center gap-5">
          <a href="https://github.com/swastikpoudel" target="_blank" className="text-gray-400 hover:text-gray-900 transition-colors">
            <FiGithub className="text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/swastik-poudel-0b8b0a299/" target="_blank" className="text-gray-400 hover:text-gray-900 transition-colors">
            <FiLinkedin className="text-xl" />
          </a>
          <a href="https://x.com/swastikpoudel17" target="_blank" className="text-gray-400 hover:text-gray-900 transition-colors">
            <FaXTwitter className="text-xl" />
          </a>
          <a href="https://www.instagram.com/swastik__poudel/" target="_blank" className="text-gray-400 hover:text-gray-900 transition-colors">
            <FiInstagram className="text-xl" />
          </a>
          <a href="https://www.facebook.com/share/1UFGxcvMsf/" target="_blank" className="text-gray-400 hover:text-gray-900 transition-colors">
            <FaFacebook className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer