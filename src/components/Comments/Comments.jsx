import ProgressBar from "../ProgressBar/ProgressBar";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Comments = () => {
    const history = useHistory();
    // useSelector & useDispatch
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({ type: 'SET_COMMENTS', payload: event.target.value})
    }

    return (
        <>
            <button onClick={() => history.push('/support')} className="button">Previous</button>
            <ProgressBar step={4} />
            <h3>Any comments you want to leave?</h3>
            <div>
                <input value={comments} onChange={handleChange} className="input" type="text" />
                <button onClick={() => history.push('/review/page')} className="button">Review</button>
            </div>
        </>
    );
}

export default Comments;