import Details from './Details/Details';
import Main from './Main/Main';

const Home = () => {
  return (
    <>
      <div className="mt-20 max-w-4xl mx-auto flex">
        <Main />
        <Details />
      </div>
    </>
  );
};

export default Home;
