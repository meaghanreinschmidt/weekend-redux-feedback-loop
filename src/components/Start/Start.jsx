import { useHistory } from 'react-router-dom';
import './Start.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const Start = () => {
    const history =  useHistory();

    return (
        <Box className="start-box">
        <Card sx={{minWidth: 275, maxWidth: 350}} className="start-card" variant="outlined">
            <CardContent>
            <Typography variant="h5" component="div">Let us know how you are doing!</Typography>
            <CardActions className="card-button">
                <Button onClick={() => history.push('/feeling')} className="button">Start</Button>
            </CardActions>
            </CardContent>
        </Card>
        </Box>
        
        
    )
}

export default Start;