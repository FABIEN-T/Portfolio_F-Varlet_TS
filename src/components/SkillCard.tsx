type SkillCardProps = {
  id: string,
  skill: string,
  logoSvg: string,
}

// export default function SkillCard({ object, index }) {
//   const { id, skill, logoSvg } = object
export default function SkillCard({ id, skill, logoSvg } : SkillCardProps) {
  return (
    <li
      key={id}
      className="group flex flex-col items-center w-20 h-20 text-sm px-0.5 py-1.5 rounded bg-gray-50 hover:bg-indigo-50 hover:scale-110 duration-200 sm:w-28 sm:h-28 sm:p-2"
    >
      <img
        src={logoSvg}
        alt={skill}
        className="h-12 w-12 mb-1 sm:h-16 sm:w-16 sm:mb-2.5"
      />
      <p className="text-black text-[11px] sm:text-sm">{skill}</p>
    </li>
  )
}
