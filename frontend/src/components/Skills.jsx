import { SiReact, SiNodedotjs, SiPostgresql, SiPython, SiDocker, SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si'

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-indigo-600 font-medium text-center mb-3">Skills</p>
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Technologies I work with</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map(skill => {
            const Icon = skill.icon
            return (
              <div key={skill.name} className="group bg-gray-50 hover:bg-white p-8 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 text-center">
                <Icon className="text-4xl mx-auto mb-4 transition-transform group-hover:scale-110" style={{ color: skill.color }} />
                <h3 className="font-semibold text-gray-900">{skill.name}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills