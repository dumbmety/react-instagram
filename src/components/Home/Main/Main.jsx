import Posts from './Posts';
import Story from './Story';

const Main = () => {
  return (
    <main className="w-full px-3 lg:w-8/12 lg:pl-0 lg:pr-5">
      <Story />
      <Posts />
    </main>
  );
};

export default Main;
