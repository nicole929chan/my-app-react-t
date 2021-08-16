import React from 'react';

const MasterButton = (props) => {
    let { masterStatus, dispatch } = props;

    return (
        <div>
            <button onClick={() => dispatch('new')}>New master</button>
            <button onClick={() => dispatch('save')}>Save master</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <button>Submit</button>
        </div>
    );
};

export default MasterButton;
