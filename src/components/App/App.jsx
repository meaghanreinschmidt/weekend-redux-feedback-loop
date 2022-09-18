import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import ReviewPage from '../ReviewPage/ReviewPage.jsx';
import FeedbackLog from '../FeedbackLog/FeedbackLog.jsx';

function App() {

  return (
    <div className='App'>
      <Router>
          <Header />
          <div>
              <Route exact path="/admin">
                  <FeedbackLog />
              </Route>
              <Route exact path="/">
                  <Feeling />
              </Route>
              <Route exact path="/understanding">
                  <Understanding />
              </Route>
              <Route exact path="/support">
                  <Support />
              </Route>
              <Route exact path="/comments">
                  <Comments />
              </Route>
              <Route exact path="/review/page">
                  <ReviewPage />
              </Route>
          </div>
      </Router>
    </div>
  );
}

export default App;
