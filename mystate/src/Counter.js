import React from 'react';

class Counter extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            myvalue:0,
            myvalue2:0
        };
    }

    countClickIn()
    {
        this.setState({myvalue:this.state.myvalue + 1});
    }

    countClickDe()
    {
        this.setState({myvalue2:this.state.myvalue2 - 1});
    }

    render()
    {
        return(
            <>
                <h1>Counter Demo</h1>
                <h2>Increment: {this.state.myvalue}</h2>
                <button onClick={this.countClickIn.bind(this)}>Click Me</button>
                <h2>Decrement: {this.state.myvalue2}</h2>
                <button onClick={this.countClickDe.bind(this)}>Click Me</button>

            </>
        );
    }
}

export default Counter;