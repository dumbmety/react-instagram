import { Link } from 'react-router-dom'
import Story from '../../Elements/Story'

interface Props {
  name: string
  username: string
  profilePicture?: string
  imgName: string
  likes: string
  time: string
  status: 'seen' | 'unseen'
}

export default function Post(props: Props) {
  const { name, username, imgName, likes, time, status } = props

  return (
    <article className="bg-white rounded border border-gray-200 mb-5">
      <header className="py-2 px-5 border-b border-gray-200 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Story
            status={status}
            size="2.5rem"
            src={`users/${username}.jpg`}
            text={name}
          />
          <span className="ml-2 font-semibold text-sm hover:underline">
            {username}
          </span>
        </Link>
        <button className="focus:outline-none">
          <svg
            aria-label="More options"
            fill="#262626"
            height="16"
            viewBox="0 0 48 48"
            width="16"
          >
            <circle
              clipRule="evenodd"
              cx="8"
              cy="24"
              fillRule="evenodd"
              r="4.5"
            ></circle>
            <circle
              clipRule="evenodd"
              cx="24"
              cy="24"
              fillRule="evenodd"
              r="4.5"
            ></circle>
            <circle
              clipRule="evenodd"
              cx="40"
              cy="24"
              fillRule="evenodd"
              r="4.5"
            ></circle>
          </svg>
        </button>
      </header>
      <div>
        <img
          className="w-full h-full object-cover"
          src={`/img/posts/${username}/${imgName}.jpg`}
          alt="Dashboard"
        />
      </div>
      <footer className="py-2 px-5 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button className="flex items-center focus:outline-none">
              <svg
                aria-label="Like"
                fill="#262626"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            </button>
            <button className="flex items-center focus:outline-none">
              <svg
                aria-label="Comment"
                fill="#262626"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path
                  clipRule="evenodd"
                  d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
            <button className="flex items-center focus:outline-none">
              <svg
                aria-label="Share Post"
                fill="#262626"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
              </svg>
            </button>
          </div>
          <button className="flex items-center focus:outline-none">
            <svg
              aria-label="Save"
              fill="#262626"
              height="24"
              viewBox="0 0 48 48"
              width="24"
            >
              <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
            </svg>
          </button>
        </div>
        <Link to="/" className="block font-semibold text-sm">
          {likes} likes
        </Link>
        <Link
          to="/"
          className="text-gray-400 uppercase"
          style={{ fontSize: '10px' }}
        >
          {time}
        </Link>
      </footer>
      <form className="flex items-center justify-between p-5 border-t border-gray-200">
        <button type="button" className="focus:outline-none">
          <svg
            aria-label="Emoji"
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
            <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
          </svg>
        </button>
        <input
          type="text"
          className="flex-1 ml-3 leading-relaxed focus:outline-none"
          placeholder="Add a comment..."
        />
        <button type="submit" className="text-lightBlue-500 font-semibold">
          Post
        </button>
      </form>
    </article>
  )
}
