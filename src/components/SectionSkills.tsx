import SkillCard from './SkillCard'
import { datasSkills } from '../datas/datasSkills'

export default function SectionSkills() {
  return (
    <section
      id="competences"
      className="flex flex-col bg-gradient-to-br from-rose-700 to-myBlue -mb-6 px-4 pt-20 pb-20 sm:mb-14 md:pt-24"
    >
      <h2 className="text-white text-2xl mx-auto mb-7 sm:text-4xl sm:mb-10 md:text-5xl md:mb-12">
        Mes Compétences
      </h2>

      <ul className="grid mx-auto grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:max-w-3xl">
        {datasSkills.map((item) => (
          <SkillCard key={item.id} id={item.id} skill={item.skill} logoSvg={item.logoSvg} />
        ))}
      </ul>
    </section>
  )
}
