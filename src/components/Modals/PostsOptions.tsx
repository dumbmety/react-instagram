import './PostsOptions.css'
import ModalsWrappers from './ModalsWrapper'

type Props = {
  open: boolean
  copyLink: () => void
  onClose: () => void
}

export default function PostsOptions(props: Props) {
  return (
    <ModalsWrappers open={props.open}>
      <ul className="posts-options">
        <li className="option option-red">Report</li>
        <li className="option option-red">Unfollow</li>
        <li className="option">Go to post</li>
        <li className="option">Tagged accounts</li>
        <li className="option">Share to...</li>
        <li
          className="option"
          onClick={() => {
            props.copyLink()
            props.onClose()
          }}
        >
          Copy link
        </li>
        <li className="option">Embed</li>
        <li className="option" onClick={props.onClose}>
          Cancel
        </li>
      </ul>
    </ModalsWrappers>
  )
}
