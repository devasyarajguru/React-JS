import React from 'react';

class State extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            myvalue:0
        };
    }

    

    handleClick()
    {
        this.setState({myvalue:1})
    }

    render()
    {
        
        return(
            <>
                <h1>Changing Values from SetState</h1>
                <h2>{this.state.myvalue}</h2>
                <button onClick={this.handleClick.bind(this)}>Click Me</button>
            </>
        );
    }
}

export default State;