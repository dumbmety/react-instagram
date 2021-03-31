import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../components/Home/Navbar/Navbar';
import Home from '../components/Home/Home';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/" component={Navbar} />
    </Router>
  );
};

export default App;
