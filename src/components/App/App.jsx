import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.jsx';

function App() {

  return (
    <div className='App'>
      <Router>
          <Header />
      </Router>
    </div>
  );
}

export default App;
