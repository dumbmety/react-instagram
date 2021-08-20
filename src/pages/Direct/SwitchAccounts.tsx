import { IoChevronDown, IoCreateOutline } from 'react-icons/io5'

export default function SwitchAccounts() {
  return (
    <div className="flex flex-1 py-3 px-4 border-b border-gray-200 items-center justify-between">
      <div className="opacity-0 pointer-events-none">
        <IoCreateOutline size={28} />
      </div>
      <button className="flex flex-1 justify-center items-center font-semibold space-x-2 focus:outline-none">
        <span>neysidev</span>
        <IoChevronDown />
      </button>
      <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
        <IoCreateOutline size={28} />
      </button>
    </div>
  )
}
