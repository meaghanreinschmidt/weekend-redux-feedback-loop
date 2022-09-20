import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedbackItem from './FeedbackItem.jsx';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';


function FeedbackLog() {
    let [feedbackList, setFeedbackList] = useState([]);

    // On load, fetch feedback data from the server
    useEffect(() => {
        console.log('in useEffect');
        getFeedback();
    }, []);

    // axios GET request
    const getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            setFeedbackList(response.data);
        }).catch((err) => {
            console.log(err);
        });
    };

    // axios DELETE request
    const deleteItem = (feedbackId) => {
        axios({
            method: 'DELETE',
            url: `/feedback/${feedbackId}`
        }).then((response) => {
            getFeedback();
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong!');
        });
    };

    // axios PUT request NOT FUNCTIONAL YET
    //    function flagFeedback(feedbackId, flagged) {
    //         axios({
    //             method: 'PUT',
    //             url: `/feedback/flagged/${feedbackId}`,
    //             data: {
    //                 flagged: flagged,
    //             }
    //         }).then((response) => {
    //             getFeedback();
    //         }).catch((error) => {
    //             console.log(error);
    //             alert('Something went wrong!');
    //         });
    //     };

    return (
        <Box sx={{ p: 2, border: '3px solid black' }}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Feeling</TableCell>
                            <TableCell>Comprehension</TableCell>
                            <TableCell>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            feedbackList.map(item => (
                                <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <FeedbackItem key={item.id} feedback={item} deleteItem={deleteItem} />
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );

}

export default FeedbackLog;