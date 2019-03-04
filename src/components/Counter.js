import React from 'react';

const counter = (props) => {

    return(
        <div className="counter">
            <button className="counter-action decrement" onClick={() => props.changeScore(props.index, -1)}>-</button
            ><span className="counter-score">{props.playerScore}</span>
            <button className="counter-action increment" onClick={() => props.changeScore(props.index, 1)}>+</button>
          </div>
    );
}
export default counter;