import myImage2 from '../assets/my-image2.jpg'

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-indigo-600 font-medium mb-3">About Me</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">A dedicated developer based in Nepal</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm Swastik Poudel, a full-stack developer passionate about building clean, modern web applications. 
                I specialize in creating responsive websites and robust backend systems.
              </p>
              <p>
                From school management systems to banking applications, I focus on writing efficient code that 
                solves real problems. Currently exploring React, Node.js, and PostgreSQL.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <img src={myImage2} alt="Swastik Poudel" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About