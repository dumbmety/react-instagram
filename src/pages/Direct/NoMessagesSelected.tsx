import "./NoMessagesSelected.css"
import { IoChatbubbleOutline } from "react-icons/io5"

export default function NoMessagesSelected() {
  return (
    <div className="no-messages-selected">
      <div>
        <div className="icon">
          <IoChatbubbleOutline size={48} />
        </div>
        <div className="content">
          <h2>Your Messages</h2>
          <p>Send private photos and messages to a friend or group.</p>
        </div>
        <button className="action">Send Message</button>
      </div>
    </div>
  )
}
