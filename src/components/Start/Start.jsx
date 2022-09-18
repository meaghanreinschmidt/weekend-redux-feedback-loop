import { useHistory } from 'react-router-dom';

const Start = () => {
    const history =  useHistory();

    return (
        <>
            <h3>Let us know how you are doing!</h3>
            <div>
                <button onClick={() => history.push('/feeling')} className="button">Start</button>
            </div>
        </>
    )
}

export default Start;