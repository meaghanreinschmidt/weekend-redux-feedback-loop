import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Feeling = () => {
    const history = useHistory();
    // useSelector & useDispatch
    const feeling = useSelector(store => store.feeling);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        if (event.target.value === '') {
            alert('Fill in the field')
        } else {
            // Pass the data to our reducer
            dispatch({ type: 'SET_FEELING', payload: event.target.value })
        }
    }

    return (
        <>
            <ProgressBar step={1} />
            <Box className="feeling-box">
                <br />
                <Card sx={{ minWidth: 275, maxWidth: 350 }} className="feeling-card" variant="outlined">
                    <br />
                    <CardContent>

                        <br />
                        <Typography variant="h5" component="div">How are you feeling today?</Typography>
                        <CardActions className="card-button">
                            {/* getter & setter */}
                            <TextField size="small" value={feeling} onChange={handleChange} className="input" type="number" required min="1" max="5" error={feeling < 1 | feeling > 5 ? true : false} />
                            <Button onClick={() => history.push('/understanding')} className="button" disabled={feeling > 0 && feeling < 6 ? false : true}>Next</Button>
                        </CardActions>
                        <br />
                        <Typography variant="h8" component="div">(Rank on a scale of 1 - 5)</Typography>
                    </ CardContent>
                </Card>
            </Box>
        </>
    );
}

export default Feeling;