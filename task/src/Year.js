import React from "react";

class Year extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            no1:'',
            msg:''
         };
    }

    myProcess(event)
    {
        this.setState({no1:event.target.value});
        event.preventDefault();

    }

    mysubmit(event)
    {
        var a = parseInt(this.state.no1);
        if((a%4===0) && (a%100!==0) || (a%400===0))
        {
            this.setState({msg:a+' is a leap year'})
        }

        else
        {
            this.setState({msg:a+' is not a leap year'})
        }

        event.preventDefault();
    }

    render() {
        return (
            <>
                <form onSubmit={this.mysubmit.bind(this)}>
                <h1>Leap Year </h1>
                <h3>Enter a Year</h3>
                <input type='number' name="no1" onChange={this.myProcess.bind(this)}></input><br/><br/>
                <input type='submit'></input>
                <h3>{this.state.msg}</h3>
                </form>
            </>
        );
    }
}

export default Year;