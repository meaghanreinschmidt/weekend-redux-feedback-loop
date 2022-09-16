import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.jsx';
import StepOne from '../StepOne/StepOne.jsx';
import StepTwo from '../StepTwo/StepTwo.jsx';
import FeedbackLog from '../FeedbackLog/FeedbackLog.jsx';

function App() {

  return (
    <div className='App'>
      <Router>
          <Header />
          <br />
          <div>
              <Route exact path="/admin">
                  <FeedbackLog />
              </Route>
              <Route exact path="/">
                  <StepOne />
              </Route>
              <Route exact path="/step/two">
                  <StepTwo />
              </Route>
          </div>
      </Router>
    </div>
  );
}

export default App;
