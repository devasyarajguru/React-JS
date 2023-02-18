import React from 'react';

function Hook2(props) {

    const [variable,func] = React.useState('green');

    return (
        <div>
            <h1>Color is: {variable}</h1><br/>
            <button onClick={()=>func('yellow')}>Click Me</button>
        </div>
    );
}

export default Hook2;