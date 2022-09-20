import { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';



const FeedbackItem = ({ feedback, deleteItem }) => {
    // These variables are for the Dialog box functionality
    const [open, setOpen] = useState(false);
    // Dialog Box appears on delete button click
    const handleClickOpen = () => {
        setOpen(true);
    };
    // Dialog Box closes on click
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <TableCell>{feedback.feeling}</TableCell>
            <TableCell>{feedback.understanding}</TableCell>
            <TableCell>{feedback.support}</TableCell>
            <TableCell>{feedback.comments}</TableCell>
            <TableCell>
                <Button onClick={handleClickOpen}>
                    <DeleteOutlineIcon color="error"></DeleteOutlineIcon>
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">
                        {"Are you sure?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Deleting this item cannot be undone.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button color="error" onClick={() => deleteItem(feedback.id)}>Delete</Button>
                    </DialogActions>
                </Dialog>
            </TableCell>
        </>
    );
}

export default FeedbackItem;