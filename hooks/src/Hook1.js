import React from 'react';

function Hook1(props) {

    const[color] = React.useState('red');

    return (
        <div>
            <h1>Color is: {color}</h1>
        </div>
    );
}

export default Hook1;