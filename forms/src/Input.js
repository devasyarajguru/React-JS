import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            txt1:''
         };
    }

    printData(event)
    {
        this.setState({
            txt1:event.target.value
        });
    }
    render() {
        return (
            <>
                <h1>Assign Textbox Value to State</h1>
                <input type='text' name='txt1' onChange={this.printData.bind(this)} autoComplete='off'></input> 
                <h2>Value is {this.state.txt1}</h2>
            </>
        );
    }
}

export default Input;