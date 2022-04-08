import { Link } from "react-router-dom"

export default function Suggestion({
  userImg,
  username
}: {
  userImg: string
  username: string
}) {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/">
          <img
            className="w-10 h-10 mr-3 rounded-full object-cover"
            src={`/img/users/${userImg}.jpg`}
            alt={username + "'s profile picture"}
          />
        </Link>
        <div className="flex flex-col">
          <Link to="/" className="text-sm font-semibold hover:underline">
            {username}
          </Link>
          <span className="text-xs text-gray-500">New to Instagram</span>
        </div>
      </div>
      <button className="text-sm text-lightBlue-500 font-semibold focus:outline-none">
        Follow
      </button>
    </li>
  )
}
