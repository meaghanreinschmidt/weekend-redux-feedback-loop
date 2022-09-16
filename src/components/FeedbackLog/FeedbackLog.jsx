import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedbackItem from './FeedbackItem.jsx';

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

    return (
        <div>
            {
                feedbackList.map(item => (
                    <FeedbackItem key={item.id} feedback={item} />
                ))
            }
        </div>
    );

}

export default FeedbackLog;