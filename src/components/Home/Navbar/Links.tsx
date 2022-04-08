import { useState } from "react"
import {
  IoHome,
  IoCompassOutline,
  IoHeartOutline,
  IoChatbubbleOutline
} from "react-icons/io5"
import { Link } from "react-router-dom"
import Menu from "./Menu"

export default function Links() {
  const [showMenu, setShowMenu] = useState(false)

  const toggleOpen = () => {
    if (showMenu) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }

  return (
    <div className="max-w-4xl mx-auto items-center px-5 lg:px-0 flex-1">
      <ul className="flex items-center justify-end">
        <li className="flex items-center">
          <Link to="/">
            <IoHome size={24} />
          </Link>
        </li>
        <li className="flex items-center ml-5">
          <Link to="/direct/inbox">
            <IoChatbubbleOutline size={24} />
          </Link>
        </li>
        <li className="flex items-center ml-5">
          <Link to="/explore">
            <IoCompassOutline size={24} />
          </Link>
        </li>
        <li className="flex items-center ml-5">
          <Link to="/activity">
            <IoHeartOutline size={24} />
          </Link>
        </li>
        <li
          className="flex items-center ml-5 cursor-pointer relative"
          onClick={toggleOpen}
        >
          <span className={`w-8 h-8 inline-block rounded-full overflow-hidden`}>
            <img
              className="w-full"
              alt="Mehdi Neysi"
              src="/img/users/neysidev.jpeg"
            />
          </span>
          <Menu show={showMenu} onClose={() => setShowMenu(false)} />
        </li>
      </ul>
    </div>
  )
}
