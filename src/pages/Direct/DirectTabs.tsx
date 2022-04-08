import "./DirectTabs.css"
import { Link, useLocation } from "react-router-dom"

export default function DirectTabs() {
  const location = useLocation()

  const isPrimary = location.pathname === "/direct/inbox"
  const isGeneral = location.pathname === "/direct/inbox/general"

  const primaryClasses = ["direct__tab"]
  const generalClasses = ["direct__tab"]

  if (isPrimary) primaryClasses.push("active")
  if (isGeneral) generalClasses.push("active")

  return (
    <ul className="direct__tabs">
      <li className={primaryClasses.join(" ")}>
        <Link to="/direct/inbox">Primary</Link>
      </li>
      <li className={generalClasses.join(" ")}>
        <Link to="/direct/inbox/general">General</Link>
      </li>
    </ul>
  )
}
