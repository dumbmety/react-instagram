import './SwitchAccounts.css'
import { IoChevronDown, IoCreateOutline } from 'react-icons/io5'

export default function SwitchAccounts() {
  return (
    <div className="switch-accounts">
      <div className="switch-account-hidden">
        <IoCreateOutline size={28} />
      </div>
      <button className="account-button">
        <span>neysidev</span>
        <IoChevronDown />
      </button>
      <button className="new-message">
        <IoCreateOutline size={28} />
      </button>
    </div>
  )
}
