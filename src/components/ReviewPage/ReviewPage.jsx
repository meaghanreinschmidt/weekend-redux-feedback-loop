import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ProgressBar from "../ProgressBar/ProgressBar";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const ReviewPage = () => {
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();
    const history = useHistory();

    const submitFeedback = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comments: comments,
            }
        }).then((response) => {
            // Clear all reducers
            dispatch({ type: 'CLEAR_ALL' });
            // Navigate to Success Page
            history.push('/success');
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong!');
        })
    }

    return (
        <>
        <ProgressBar step={5} />
        <Box className="review-box">
            <br />
            <Card sx={{ minWidth: 275, maxWidth: 350 }} className="review-card" variant="outlined">
                <br />
                <CardContent>
                    <Button onClick={() => history.push('/comments')} className="button">Previous</Button>
                    <br />
                    <Typography variant="h5" component="div">Review and Submit</Typography>
                    <br />
                    <div>
                        <div>
                            <Typography>Feeling: {feeling}</Typography>
                            <Typography>Understanding: {understanding}</Typography>
                            <Typography>Support: {support}</Typography>
                            <Typography>Comments: {comments}</Typography>
                        </div>
                        <CardActions style={{ justifyContent: 'center' }}>
                            <Button onClick={submitFeedback} className="button">Submit</Button>
                        </CardActions>
                    </div>
                </CardContent>
            </Card>
        </Box>
        </>
    )
}

export default ReviewPage;