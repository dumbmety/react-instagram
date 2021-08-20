import { IoChatbubbleOutline } from 'react-icons/io5'

export default function NoMessagesSelected() {
  return (
    <div className="grid place-items-center h-full">
      <div className="flex flex-col items-center space-y-4">
        <div className="inline-block rounded-full p-5 border-4 border-gray-700 text-gray-700">
          <IoChatbubbleOutline size={48} />
        </div>
        <div className="text-center">
          <h2 className="font-semibold text-2xl text-gray-700">
            Your Messages
          </h2>
          <p className="text-gray-500">
            Send private photos and messages to a friend or group.
          </p>
        </div>
        <button className="py-1 px-2 text-sm rounded transition duration-150 ease-in-out text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-700">
          Send Message
        </button>
      </div>
    </div>
  )
}
