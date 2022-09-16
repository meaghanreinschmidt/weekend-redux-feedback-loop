import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const StepOne = () => {
    const history = useHistory();
    // useSelector & useDispatch
    const feeling = useSelector(store => store.feeling);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        // Pass the data to our reducer
        dispatch({ type: 'SET_FEELING', payload: event.target.value})
    }

    return (
        <>
            <ProgressBar step={1} />
            <h3>How are you feeling today?</h3>
            <div>
                {/* getter & setter */}
                <input value={feeling} onChange={handleChange} className="input" type="number" />
                <button onClick={() => history.push('/step/two')} className="button">Next</button>
            </div>
        </>
    );
}

export default StepOne;