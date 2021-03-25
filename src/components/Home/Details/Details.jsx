import Profile from './Profile';
import Suggestions from './Suggestions/Suggestions';
import Footer from './Footer';

const Details = () => {
  return (
    <aside className="hidden lg:block w-4/12">
      <Profile />
      <Suggestions />
      <Footer />
    </aside>
  );
};

export default Details;
