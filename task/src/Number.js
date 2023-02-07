import React from "react";
class Number extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            no1:'',
            msg:''
         };
    }

    handleClick(event)
    {
        this.setState({no1:event.target.value});
        event.preventDefault();              
    }

    handleClick2(event)
    {
    
        var a = parseInt(this.state.no1);
        if (a%2===0)
        {
            this.setState({msg:a + ' is Even'});
        }
        else
        {
            this.setState({msg:a + ' is Odd'});
        }
        // this.setState({msg:"Value is "+a})
        // alert(a);
        event.preventDefault();              

    }

    render() {
        return (
            <>
            <form onSubmit={this.handleClick2.bind(this)}>
                <h2>Enter a number</h2><br/>
                <input type='number' name="no1" onChange={this.handleClick.bind(this)}></input><br/><br/>
                <input type='submit'></input><br/><br/>
                <h3>{this.state.msg}</h3>
            </form>
            </>
        );
    }
}

export default Number;