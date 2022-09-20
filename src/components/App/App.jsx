import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.jsx';
import Start from '../Start/Start.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import ReviewPage from '../ReviewPage/ReviewPage.jsx';
import Success from '../Success/Success.jsx';
import FeedbackLog from '../FeedbackLog/FeedbackLog.jsx';
import Grid from '@mui/material/Grid';


function App() {

    return (
        <div className='App'>
            <Router>
                <Header />
                <div>
                    <Grid container justifyContent="center">
                        <Route exact path="/admin">
                            <FeedbackLog />
                        </Route>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Route exact path="/">
                            <Start />
                        </Route>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Route exact path="/feeling">
                            <Feeling />
                        </Route>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Route exact path="/understanding">
                            <Understanding />
                        </Route>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Route exact path="/support">
                            <Support />
                        </Route>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Route exact path="/comments">
                            <Comments />
                        </Route>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Route exact path="/review/page">
                            <ReviewPage />
                        </Route>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Route exact path="/success">
                            <Success />
                        </Route>
                    </Grid>
                </div>
            </Router>
        </div>
    );
}

export default App;
