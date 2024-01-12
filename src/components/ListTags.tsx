export default function ListTags({ list }: { list: string[] }) {
  // console.log("list", list)
  return (
    list.length > 0 && (
      <>
        {list.map((tag: string, index: number) => (
          <ul
            key={`${tag}-${index}`}
            className={`flex flex-col text-sm text-white rounded-tl-md rounded-br-md mr-2 mb-1`}
          >
            <li className="text-left list-disc -mb-0.5">{tag}</li>
          </ul>
        ))}
      </>
    )
  )
}

