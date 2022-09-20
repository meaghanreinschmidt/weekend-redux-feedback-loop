import ProgressBar from '../ProgressBar/ProgressBar';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Support = () => {
    const history = useHistory();
    // useSelector & useDispatch
    const support = useSelector(store => store.support);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({ type: 'SET_SUPPORT', payload: event.target.value })
    }

    return (
        <Box className="support-box">
            <Card sx={{ minWidth: 275, maxWidth: 350 }} className="support-card" variat="outlined">
                <br />
                <CardContent>
                    <ProgressBar step={3} />
                    <Button onClick={() => history.push('/understanding')} className="button">Previous</Button>
                    <br />
                    <Typography variant="h5" component="div">How well are you being supported?</Typography>
                    <CardActions className="card-button">
                        <TextField size="small" value={support} onChange={handleChange} className="input" type="number" required min="1" max="5" error={support < 1 | support > 5 ? true : false} />
                        <Button onClick={() => history.push('/comments')} className="button" disabled={support > 0 && support < 6 ? false : true}>Next</Button>
                    </CardActions>
                    <br />
                    <Typography variant="h8" component="div">(Rank on a scale of 1 - 5)</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Support;