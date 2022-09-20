import TableCell from '@mui/material/TableCell';

const FeedbackItem = ({ feedback }) => {

    return (
        <>
            <TableCell>{feedback.feeling}</TableCell>
            <TableCell>{feedback.understanding}</TableCell>
            <TableCell>{feedback.support}</TableCell>
            <TableCell>{feedback.comments}</TableCell>
        </>
    );
}

export default FeedbackItem;