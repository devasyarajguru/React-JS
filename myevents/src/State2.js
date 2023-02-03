import React from 'react';

class State2 extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            hello:'Rajguru',
            age:30
        };
    }

    render()
    {
        return(
            <>
                <h1>State Example</h1>
               <h2> {this.state.hello} </h2>
               <h2> {this.state.age} </h2>
            </>
        );
    }
}

export default State2;