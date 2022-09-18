import { useHistory } from 'react-router-dom';


const Success = () => {
    const history = useHistory();
    return (
        <>
            <h2 className="success">Thank you for your submission!</h2>
            <div>
                <button onClick={() => history.push('/')} className="button">Submit another response</button>
            </div>
        </>
    )
}

export default Success;

