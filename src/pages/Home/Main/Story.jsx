import { Link } from "react-router-dom"

const Story = () => {
  return (
    <section className="bg-white w-full border border-gray-200 rounded px-5 py-3 mb-5">
      <ul className="flex space-x-4">
        <li className="w-16 overflow-hidden space-y-5 text-center">
          <Link to="/">
            <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-0.5 rounded-full">
              <div className="bg-white p-0.5 rounded-full">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="/img/users/russcodes.jpg"
                  alt="russcodes"
                />
              </div>
            </div>
            <span className="text-xs">russcodes</span>
          </Link>
        </li>
        <li className="w-16 overflow-hidden space-y-5 text-center">
          <Link to="/">
            <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-0.5 rounded-full">
              <div className="bg-white p-0.5 rounded-full">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="/img/users/onlysiamak.jpg"
                  alt="onlysiamak"
                />
              </div>
            </div>
            <span className="text-xs">onlysiamak</span>
          </Link>
        </li>
        <li className="w-16 overflow-hidden space-y-5 text-center">
          <Link to="/">
            <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-0.5 rounded-full">
              <div className="bg-white p-0.5 rounded-full">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="/img/users/sepide_moqadasi.jpg"
                  alt="sepide_moqadasi"
                />
              </div>
            </div>
            <span className="text-xs">sepide_moqadasi</span>
          </Link>
        </li>
        <li className="w-16 overflow-hidden space-y-5 text-center">
          <Link to="/">
            <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-0.5 rounded-full">
              <div className="bg-white p-0.5 rounded-full">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="/img/users/ui.amjad.jpg"
                  alt="ui.amjad"
                />
              </div>
            </div>
            <span className="text-xs">ui.amjad</span>
          </Link>
        </li>
        <li className="w-16 overflow-hidden space-y-5 text-center">
          <Link to="/">
            <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-0.5 rounded-full">
              <div className="bg-white p-0.5 rounded-full">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="/img/users/mehradhiddenofficial.jpg"
                  alt="mehradhiddenofficial"
                />
              </div>
            </div>
            <span className="text-xs">mehradhiddenofficial</span>
          </Link>
        </li>
        <li className="w-16 overflow-hidden space-y-5 text-center">
          <Link to="/">
            <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-0.5 rounded-full">
              <div className="bg-white p-0.5 rounded-full">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="/img/users/fazurrehman.jpg"
                  alt="fazurrehman"
                />
              </div>
            </div>
            <span className="text-xs">fazurrehman</span>
          </Link>
        </li>
        <li className="w-16 overflow-hidden space-y-5 text-center">
          <Link to="/">
            <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-0.5 rounded-full">
              <div className="bg-white p-0.5 rounded-full">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="/img/users/sajon.co.jpg"
                  alt="sajon.co"
                />
              </div>
            </div>
            <span className="text-xs">sajon.co</span>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Story
