import React from 'react';
import Counter from './Counter';

const player = (props) => {
    return(
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={props.removePlayer} >✖</button>{props.playerName}
            </span>
            <Counter changeScore={props.changeScore} index={props.index} playerScore={props.playerScore} />
        </div>
    );
}
export default player;