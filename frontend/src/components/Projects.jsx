import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: "Spring Hill School",
    desc: "A modern responsive website for a school featuring programs, gallery, and admission information.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive"],
    liveUrl: "https://www.springhill.edu.np/",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Bank Account Management",
    desc: "A C++ console application for managing bank accounts with deposit, withdrawal, and balance inquiry features.",
    tech: ["C++", "OOP", "Data Structures"],
    liveUrl: "#",
    githubUrl: "https://github.com/swastikpoudel/swastik-c---/blob/main/lab3.5.cpp",
    featured: false
  },
  {
    title: "Portfolio Website",
    desc: "This personal portfolio built with React, Express, and PostgreSQL showcasing my work and skills.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    liveUrl: "#",
    githubUrl: "https://github.com/swastikpoudel",
    featured: false
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-indigo-600 font-medium text-center mb-3">Portfolio</p>
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Featured Projects</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.title} className={`bg-white rounded-2xl border overflow-hidden group hover:shadow-xl transition-all duration-300 ${project.featured ? 'border-indigo-200' : 'border-gray-100'}`}>
              {project.featured && <div className="h-2 bg-indigo-600"></div>}
              <div className="p-8">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  {project.featured && (
                    <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-600 rounded-full">Featured</span>
                  )}
                </div>
                <p className="text-gray-500 mb-6 leading-relaxed">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">{t}</span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.liveUrl !== '#' && (
                    <a href={project.liveUrl} target="_blank" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                  {project.githubUrl !== '#' && (
                    <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                      <FiGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects