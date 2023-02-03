import React from 'react';

class Set2 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            myvalue:'Default'
        }
    }

    btn1Click()
    {
        this.setState({myvalue:'Devasya'});
    }

    btn2Click()
    {
        this.setState({myvalue:'Rajguru'});
    }
    render()
    {
        return(
            <>
                <h1>State Update with 2 Buttons</h1>
                <h2>{this.state.myvalue}</h2>
                <button onClick={this.btn1Click.bind(this)}>Get Name</button> &nbsp;&nbsp;
                <button onClick={this.btn2Click.bind(this)}>Get Surname</button>
            </>
        );
    }
}

export default Set2;