import ProgressBar from '../ProgressBar/ProgressBar';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const StepThree = () => {
    const history = useHistory();
    // useSelector & useDispatch
    const support = useSelector(store => store.support);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({ type: 'SET_SUPPORT', payload: event.target.value})
    }

    return (
        <>
            <ProgressBar step={3} />
            <h3>How well are you being supported?</h3>
            <div>
                <input value={support} onChange={handleChange} className="input" type="number" />
                <button onClick={() => history.push('/step/four')} className="button">Next</button>
            </div>
        </>
    )
}

export default StepThree;