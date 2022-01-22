import './Direct.css'

import { PRIMARY_MESSAGES } from '../../constants/messages'

import DirectTabs from './DirectTabs'
import MessagesList from './MessagesList'
import NoMessagesSelected from './NoMessagesSelected'
import SwitchAccounts from './SwitchAccounts'

export default function Direct() {
  return (
    <section className="direct">
      <div className="direct__left">
        <SwitchAccounts />
        <DirectTabs />
        <MessagesList messages={PRIMARY_MESSAGES} />
      </div>
      <div className="direct__right">
        <NoMessagesSelected />
      </div>
    </section>
  )
}
