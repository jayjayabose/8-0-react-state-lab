const ScoreBoard = (props) => {
    const {currentScore} = props;

    return (
        <h2>Current Score: {currentScore}</h2>
    )
};

export default ScoreBoard;