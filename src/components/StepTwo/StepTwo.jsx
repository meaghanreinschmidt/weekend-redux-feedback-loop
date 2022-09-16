import ProgressBar from '../ProgressBar/ProgressBar';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const StepTwo = () => {
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
            <ProgressBar step={2} />
            <h3>How well are you understanding the content?</h3>
            <div>
                {/* getter & setter */}
                <input value={understanding} onChange={handleChange} className="input" type="number" />
                <button onClick={() => history.push('/step/three')} className="button">Next</button>
            </div>
        </>
    );
}

export default StepTwo;