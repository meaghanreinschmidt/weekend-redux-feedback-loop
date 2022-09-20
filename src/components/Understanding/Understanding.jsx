import ProgressBar from '../ProgressBar/ProgressBar';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Understanding.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Understanding = () => {
    const history = useHistory();
    // useSelector & useDispatch
    const understanding = useSelector(store => store.understanding);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        // Pass the data to our reducer
        dispatch({ type: 'SET_UNDERSTANDING', payload: event.target.value })
    }

    return (
        <>
        <ProgressBar step={2} />
        <Box className="understanding-box">
            <br />
            <Card sx={{ minWidth: 275, maxWidth: 350 }} className="understanding-card" variant="outlined">
                <br />
                <CardContent>
                    <Button onClick={() => history.push('/feeling')} className="button">Previous Step</Button>
                    <br />
                    <Typography variant="h5" component="div">How well are you understanding the content?</Typography>
                    <CardActions className="card-button">
                        {/* getter & setter */}
                        <TextField size="small" value={understanding} onChange={handleChange} className="input" type="number" required min="1" max="5" error={understanding < 1 | understanding > 6 ? true : false} />
                        <Button onClick={() => history.push('/support')} className="button" disabled={understanding > 0 && understanding < 6 ? false : true}>Next</Button>
                    </CardActions>
                    <br />
                    <Typography variant="h8" component="div">(Rank on a scale of 1 - 5)</Typography>
                </CardContent>
            </Card>
        </Box>
        </>
    );
}

export default Understanding;