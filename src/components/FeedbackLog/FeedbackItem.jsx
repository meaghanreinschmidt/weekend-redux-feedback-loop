const FeedbackItem = ({feedback}) => {

    return (
        <div style={{margin: '20px 10px', fontSize: '1.4em'}}>
            <div>Feeling: {feedback.feeling}</div>
            <div>Understanding: {feedback.understanding}</div>
            <div>Support: {feedback.support}</div>
            <div>Comments: {feedback.comments}</div>
        </div>
    );
}

export default FeedbackItem;