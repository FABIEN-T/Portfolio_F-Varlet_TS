// import PropTypes from 'prop-types'

// type ListProps = string[]

export default function ListTags({ list }: string[]) {
  console.log("list", list)
  return (
    ListTags.length > 0 && (
      <>
        {list.map((tag: string, index: string) => (
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

// ListTags.propTypes = {
//   ListTags: PropTypes.arrayOf(PropTypes.string),
// }
