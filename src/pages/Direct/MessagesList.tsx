import "./MessagesList.css"

import { IDirectMessage } from "../../constants/messages"

interface Props {
  messages: IDirectMessage[]
}

export default function MessagesList({ messages }: Props) {
  return (
    <ul className="messages-list">
      {messages.map(message => (
        <li key={message.id} className="message">
          <img
            className="message-user-avatar"
            src={message.user.avatar}
            alt={message.user.username}
          />
          <div className="message-content">
            <p className="message-username">{message.user.username}</p>
            <div className="message-text">
              <span>{message.lastMessage.time} ·</span>
              <p>{message.lastMessage.text}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
