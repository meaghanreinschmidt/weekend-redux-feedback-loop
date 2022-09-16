import ProgressBar from '../ProgressBar/ProgressBar';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const ReviewPage = () => {
    const feeling =  useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();
    const history = useHistory();

    const submitFeedback = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comments: comments,
            }
        }).then((response) => {
            // Clear all reducers
            dispatch({ type: 'CLEAR_ALL' });
            // Navigate to Step One
            history.push('/');
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong!');
        })
    }

    return (
        <>
            <ProgressBar step={5} />
            <h3>Review and Submit</h3>
            <div>
                <div>
                    <h4>Feeling: {feeling}</h4>
                    <h4>Understanding: {understanding}</h4>
                    <h4>Support: {support}</h4>
                    <h4>Comments: {comments}</h4>
                </div>
                <button onClick={submitFeedback} className="button">Submit</button>
            </div>
        </>
    )
}

export default ReviewPage;