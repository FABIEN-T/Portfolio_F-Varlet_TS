import { useState } from 'react'

type MenuListProps = {
  id: string
  linkSection: string
  item: string
}

export default function MenuList({ id, linkSection, item }: MenuListProps) {
  const [setIsOpen] = useState(false)
  return (
    <li
      key={id}
      className="block py-1 md:inline md-py-0 md:mr-6"
      onClick={() => setIsOpen(false)}
    >
      <a
        href={linkSection}
        className="text-sm uppercase font-semibold hover:text-rose-600"
      >
        {item}
      </a>
    </li>
  )
}


