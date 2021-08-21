import './Direct.css'

import SwitchAccounts from './SwitchAccounts'
import DirectTabs from './DirectTabs'
import NoMessagesSelected from './NoMessagesSelected'

export default function Direct() {
  return (
    <section className="direct">
      <div className="direct__left">
        <SwitchAccounts />
        <DirectTabs />
      </div>
      <div className="direct__right">
        <NoMessagesSelected />
      </div>
    </section>
  )
}
