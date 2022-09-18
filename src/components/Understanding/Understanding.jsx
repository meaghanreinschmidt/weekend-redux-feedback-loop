import ProgressBar from '../ProgressBar/ProgressBar';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Understanding = () => {
    const history = useHistory();
    // useSelector & useDispatch
    const understanding = useSelector(store => store.understanding);
    const dispatch = useDispatch();

const handleChange = (event) => {
    // Pass the data to our reducer
    dispatch({ type: 'SET_UNDERSTANDING', payload: event.target.value})
}

    return (
        <>
            <button onClick={() => history.push('/feeling')} className="button">Previous</button>
            <ProgressBar step={2} />
            <h3>How well are you understanding the content?</h3>
            <div>
                {/* getter & setter */}
                <input value={understanding} onChange={handleChange} className="input" type="number" required min="1" max="5" error={understanding < 1 | understanding > 6 ? true : false} />
                <button onClick={() => history.push('/support')} className="button" disabled={understanding > 0 && understanding < 6 ? false : true}>Next</button>
            </div>
        </>
    );
}

export default Understanding;