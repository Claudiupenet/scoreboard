import React from 'react';

const addPLayer = (props) => {
    return(
        <form className="form" onSubmit={props.addPlayer} >
            <input type='text' name='name' placeholder='Player name' />
            <input type='submit' value="Submit" />
        </form>
    );
}
export default addPLayer;