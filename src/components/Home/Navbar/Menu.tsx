import { Link } from "react-router-dom"
import {
  IoBookmarkOutline,
  IoCogOutline,
  IoLogOutOutline,
  IoPersonCircleOutline,
  IoReloadOutline
} from "react-icons/io5"

type Props = {
  show: boolean
  onClose: () => void
}

export default function Menu(props: Props) {
  const className = [
    "absolute top-12 -right-6",
    "w-56 select-none bg-white",
    "overflow-hidden rounded-lg shadow-lg"
  ]
  props.show ? className.push("block z-50") : className.push("hidden")

  return (
    <>
      <div
        className={`shadow-lg z-20 w-4 h-4 absolute top-10 right-2 bg-white ${
          props.show ? "block" : "hidden"
        }`}
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />
      <div onClick={props.onClose} className={className.join(" ")}>
        <ul>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-50">
            <Link to="/neysidev">
              <div className="flex items-center space-x-2">
                <IoPersonCircleOutline size={20} />
                <span className="text-sm">Profile</span>
              </div>
            </Link>
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-50">
            <Link to="/neysidev/saved">
              <div className="flex items-center space-x-2">
                <IoBookmarkOutline size={20} />
                <span className="text-sm">Saved</span>
              </div>
            </Link>
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-50">
            <Link to="/neysidev/settings">
              <div className="flex items-center space-x-2">
                <IoCogOutline size={20} />
                <span className="text-sm">Settings</span>
              </div>
            </Link>
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-50">
            <Link to="/neysidev/switch">
              <div className="flex items-center space-x-2">
                <IoReloadOutline size={20} />
                <span className="text-sm">Switch Accounts</span>
              </div>
            </Link>
          </li>
          <hr className="border border-gray-100" />
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-50">
            <Link to="/neysidev/logout">
              <div className="flex items-center space-x-2">
                <IoLogOutOutline size={20} />
                <span className="text-sm">Log out</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
