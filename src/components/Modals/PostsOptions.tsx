import ModalsWrappers from './ModalsWrapper'

type Props = {
  open: boolean
  onClose: () => void
}

export default function PostsOptions(props: Props) {
  return (
    <ModalsWrappers open={props.open}>
      <ul className="bg-white w-96 overflow-hidden rounded-2xl select-none text-center divide-y">
        <li className="py-3 text-sm font-semibold text-red-500 cursor-pointer hover:bg-gray-50">
          Report
        </li>
        <li className="py-3 text-sm font-semibold text-red-500 cursor-pointer hover:bg-gray-50">
          Unfollow
        </li>
        <li className="py-3 text-sm cursor-pointer hover:bg-gray-50">
          Go to post
        </li>
        <li className="py-3 text-sm cursor-pointer hover:bg-gray-50">
          Tagged accounts
        </li>
        <li className="py-3 text-sm cursor-pointer hover:bg-gray-50">
          Share to...
        </li>
        <li className="py-3 text-sm cursor-pointer hover:bg-gray-50">
          Copy link
        </li>
        <li className="py-3 text-sm cursor-pointer hover:bg-gray-50">Embed</li>
        <li
          className="py-3 text-sm cursor-pointer hover:bg-gray-50"
          onClick={props.onClose}
        >
          Cancel
        </li>
      </ul>
    </ModalsWrappers>
  )
}
