import Suggestion from "./Suggestion"
import SuggestionsHeader from "./SuggestionsHeader"

const Suggestions = () => {
  return (
    <section className="mb-5">
      <SuggestionsHeader />
      <ul className="space-y-3">
        <Suggestion username="ryanswich" userImg="ryanswich" />
        <Suggestion username="jakobowsky" userImg="jakobowsky" />
        <Suggestion username="joeel56" userImg="joeel56" />
        <Suggestion username="andrew.eugene" userImg="andrew.eugene" />
        <Suggestion username="marziuxd" userImg="marziuxd" />
      </ul>
    </section>
  )
}

export default Suggestions
