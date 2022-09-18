import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Feeling = () => {
    const history = useHistory();
    // useSelector & useDispatch
    const feeling = useSelector(store => store.feeling);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        if (event.target.value === '') {
            alert('Fill in the field')
        } else {
        // Pass the data to our reducer
        dispatch({ type: 'SET_FEELING', payload: event.target.value})
        }
    }

    return (
        <>
            <ProgressBar step={1} />
            <h3>How are you feeling today?</h3>
            <div>
                {/* getter & setter */}
                <input value={feeling} onChange={handleChange} className="input" type="number" required min="1" max="5" error={feeling < 1 | feeling > 5 ? true : false}/>
                <button onClick={() => history.push('/understanding')} className="button" disabled={feeling > 0 && feeling < 6 ? false : true}>Next</button>
            </div>
        </>
    );
}

export default Feeling;