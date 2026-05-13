import { FiArrowDown } from 'react-icons/fi'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import myImage from '../assets/my-image.png'
import { FaXTwitter } from 'react-icons/fa6'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
          
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Hi, I'm
              <span className="text-indigo-600"> Swastik</span>
            </h1>
            
            <p className="text-xl text-gray-500 mb-8 max-w-xl leading-relaxed">
              I create clean, performant web applications focused on user experience and modern design.
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <a href="#projects" className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                View Projects
              </a>
              <a href="#contact" className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-full font-medium hover:border-gray-900 transition-colors">
                Get In Touch
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://github.com/swastikpoudel" target="_blank" className="text-gray-400 hover:text-gray-900 transition-colors">
                <FiGithub className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/swastik-poudel-0b8b0a299/" target="_blank" className="text-gray-400 hover:text-gray-900 transition-colors">
                <FiLinkedin className="text-xl" />
              </a>
              <a href="https://www.instagram.com/swastik__poudel/" target="_blank" className="text-gray-400 hover:text-gray-900 transition-colors">
                <FiInstagram className="text-xl" />
              </a>
              <a href="https://x.com/swastikpoudel17" target="_blank" className="text-gray-400 hover:text-gray-900 transition-colors">
                <FaXTwitter className="text-xl" />
              </a>  
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
              <img src={myImage} alt="Swastik Poudel" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <FiArrowDown className="text-2xl text-gray-300 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero