import { Link } from "react-router-dom"

const suggestionsHeader = () => (
  <header className="mb-3 flex items-center justify-between">
    <h2 className="text-sm font-semibold text-gray-500">Suggestions For You</h2>
    <Link to="/" className="text-sm text-gray-800">
      See All
    </Link>
  </header>
)

export default suggestionsHeader
