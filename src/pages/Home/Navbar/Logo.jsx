import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className="flex-1">
      <Link to="/">
        <img src="/img/logo-type.png" alt="Instagram Logo" />
      </Link>
    </div>
  )
}

export default Logo
