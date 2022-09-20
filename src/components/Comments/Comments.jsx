import ProgressBar from "../ProgressBar/ProgressBar";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Comments.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Comments = () => {
    const history = useHistory();
    // useSelector & useDispatch
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({ type: 'SET_COMMENTS', payload: event.target.value })
    }

    return (
        <>
        <ProgressBar step={4} />
        <Box className="comments-box">
            <br />
            <Card sx={{ minWidth: 275, maxWidth: 350 }} className="comments-card" variant="outlined">
                <br />
                <CardContent>
                    
                    <Button onClick={() => history.push('/support')} className="button">Previous</Button>
                    <br />
                    <Typography variant="h5" component="div">Any comments you want to leave?</Typography>
                    <br />
                    <TextField size="small" value={comments} onChange={handleChange} className="input" type="text" />
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button onClick={() => history.push('/review/page')} className="review-button">Review</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Box>
        </>
    );
}

export default Comments;