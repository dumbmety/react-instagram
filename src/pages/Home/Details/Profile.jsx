import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <section className="my-5 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="bg-gray-300 p-0.5 rounded-full mr-5">
          <div className="bg-white p-0.5 rounded-full w-14 h-14 overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-full"
              src="/img/users/neysidev.jpeg"
              alt="Mehdi Neysi"
            />
          </div>
        </Link>
        <div>
          <Link to="/profile" className="font-semibold text-sm">
            neysidev
          </Link>
          <h3 className="font-semibold text-sm text-gray-400">Mehdi Neysi</h3>
        </div>
      </div>
      <button className="font-semibold text-sm text-lightBlue-500 focus:outline-none">
        Switch
      </button>
    </section>
  )
}

export default Profile
