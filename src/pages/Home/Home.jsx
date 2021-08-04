import Details from './Details/Details'
import Main from './Main/Main'

const Home = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto flex">
        <Main />
        <Details />
      </div>
    </>
  )
}

export default Home
