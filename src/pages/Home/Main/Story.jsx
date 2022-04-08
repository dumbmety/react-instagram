import { useState } from "react"
import { Link } from "react-router-dom"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

import { USER_STORIES } from "../../../constants/stories"

// TODO: auto scroll to the start/end
export default function Story() {
  const usersContainerWidth = USER_STORIES.length * 64
  const [translateX, setTranslateX] = useState(0)

  const gotoNext = () => {
    setTranslateX(translateX - 264)
  }

  const gotoPrev = () => {
    setTranslateX(translateX + 264)
  }

  return (
    <section className="bg-white relative overflow-hidden w-full border border-gray-200 rounded px-5 py-3 mb-5">
      <ul
        style={{
          width: 80 + usersContainerWidth,
          transform: `translateX(${translateX}px)`
        }}
        className="flex space-x-3 transition-all duration-700 ease-in-out"
      >
        {USER_STORIES.map(user => (
          <li
            key={user._id}
            className="w-16 overflow-hidden truncate space-y-5 text-center"
          >
            <Link to={`/stories/${user._id}`}>
              <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-0.5 rounded-full">
                <div className="bg-white p-0.5 rounded-full">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={`/img/users/${user.username}.jpg`}
                    alt={user.username}
                  />
                </div>
              </div>
              <span className="text-xs">{user.username}</span>
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={gotoPrev}
        disabled={translateX === 0}
        style={{
          opacity: translateX < 0 ? 1 : 0,
          boxShadow: "0 0 10px 2px rgba(0,0,0,0.075)"
        }}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full grid place-items-center transition duration-150 ease-in-out hover:scale-110"
      >
        <HiChevronLeft />
      </button>

      <button
        onClick={gotoNext}
        style={{ boxShadow: "0 0 10px 2px rgba(0,0,0,0.075)" }}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full grid place-items-center transition duration-150 ease-in-out hover:scale-110"
      >
        <HiChevronRight />
      </button>
    </section>
  )
}
