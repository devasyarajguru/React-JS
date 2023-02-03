import React from 'react';

class SumUser extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            a:'',
            b:''
        }
    }

    value1(event)
    {
        this.setState({a:event.target.value});
        console.log(event.target.value);
    }

    value2(event)
    {
        this.setState({b:event.target.value});
        console.log(event.target.value);
    }

    Submit(event)
    {
        var a = this.state.a;
        var b = this.state.b;
        var c = parseInt(a) + parseInt(b);
        // console.log(c);
        this.setState({c:"Sum is "+ c});
        event.preventDefault();
    }

    render()
    {
      
        return(
            <>
                <h1>Sum of 2 numbers using User Input</h1>

                <form onSubmit={this.Submit.bind(this)}>
                <h2>Enter Value 1</h2> 
                <input type='text' onChange={this.value1.bind(this)}></input> 
                <h2>Enter Value 2</h2> 
                <input type='text' onChange={this.value2.bind(this)}></input>
                <br></br><br></br>  
                <input type = 'submit'></input><br></br><br></br>
                <h2>{this.state.c}</h2>
                </form>
            </>
        );
    }
}

export default SumUser;