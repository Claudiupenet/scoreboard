import React from 'react';
import Stopwatch from './Stopwatch';

const header = (props) => {
    return(
        <header>
            <table className="stats">
                <tbody>
                    <tr>
                        <td>
                            <span className="first-child">Players: {props.numOfPlayers}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="last-child">Total points: {props.totalPoints}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        <h1>{props.title}</h1>
        <Stopwatch />
      </header>
    );
}
export default header;