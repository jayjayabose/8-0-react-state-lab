import react from "react";


class GameControls extends react.Component {
    render(){
        const { increment, handleIncrement, handlePay } = this.props;
        return(            
            <>
            <button onClick={handleIncrement}>+{increment}</button>
            <br></br>
            <br></br>
            <button onClick={handlePay}>Pay 10 points to change from +{increment} to +{increment+1}</button>
            </>
        )
    }

}

export default GameControls;
