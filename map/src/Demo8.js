import React from 'react';

function Demo8(props) {

    const Program = ['C',"C++","Java","ReactJS"]
    

    return (
        <div>
            {Program.map(function(value)
            {
                return <h2>{value}</h2>
            })}
        </div>
    );
}

export default Demo8;