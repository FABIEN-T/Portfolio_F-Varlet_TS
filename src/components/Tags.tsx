// type TagsProps = (string | undefined)[]

export default function Tags({ tags }: { tags: string[] }) {
  // console.log(tags)
  return (
    tags.length > 0 && (
      <div className="flex flex-wrap">
        {tags.map((tag: string, index: number) => (
          <div
            key={`${tag}-${index}`}
            className="bg-myBlue opacity-70 text-xs text-white rounded-tl-md rounded-br-md mr-2 mb-1"
          >
            <span className="p-2">{tag}</span>
          </div>
        ))}
      </div>
    )
  )
}


