import ProgressBar from '../ProgressBar/ProgressBar';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Support = () => {
    const history = useHistory();
    // useSelector & useDispatch
    const support = useSelector(store => store.support);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({ type: 'SET_SUPPORT', payload: event.target.value})
    }

    return (
        <>
            <button onClick={() => history.push('/understanding')} className="button">Previous</button>
            <ProgressBar step={3} />
            <h3>How well are you being supported?</h3>
            <div>
                <input value={support} onChange={handleChange} className="input" type="number" required min="1" max="5" error={support < 1 | support > 5 ? true : false} />
                <button onClick={() => history.push('/comments')} className="button" disabled={support > 0 && support < 6 ? false : true}>Next</button>
            </div>
        </>
    )
}

export default Support;