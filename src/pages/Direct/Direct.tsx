import SwitchAccounts from './SwitchAccounts'
import DirectTabs from './DirectTabs'
import NoMessagesSelected from './NoMessagesSelected'

export default function Direct() {
  return (
    <section
      className="bg-white w-full flex divide-x-2 rounded border border-gray-200"
      style={{ height: 'calc(100vh - 7rem)' }}
    >
      <div className="w-1/3">
        <SwitchAccounts />
        <DirectTabs />
      </div>
      <div className="w-2/3">
        <NoMessagesSelected />
      </div>
    </section>
  )
}
