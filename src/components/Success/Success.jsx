import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const Success = () => {
    const history = useHistory();
    return (
        <Box className="success-box">
            <Card sx={{ minWidth: 275, maxWidth: 350 }} className="success-card" variant="outlined">
                <br />
                <CardContent>
                    <Typography variant="h5" component="div" className="success">Thank you for your submission!</Typography>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button onClick={() => history.push('/')} className="button">Submit another response</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Success;

