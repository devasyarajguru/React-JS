import React from "react";
import './external.css';
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            a:'',
            b:''
         };
    }

    myClick(event)
    {
        alert(event.target.name);
        this.setState({[event.target.name]:this.state.a})
    }

    mySubmit(event)
    {
        
    }

    render() {
        return (
           <>
                <h1>Calculator</h1>
                <div className="container">
                <div className="output">
                        <p><h2>&nbsp;Ans:&nbsp;</h2></p>
                        </div>
                <table cellPadding='10' cellSpacing='2'>
                    <tr>
                        <td><button name='+'>+</button></td>
                        <td><button name='-'>-</button></td>
                        <td><button name='x'>x</button></td>
                        <td><button name='/'>/</button></td>
                    </tr>
                    <tr>
                        <td><button name='7' onClick={this.myClick.bind(this)}>7</button></td>
                        <td><button name='8' onClick={this.myClick.bind(this)}>8</button></td>
                        <td><button name='9' onClick={this.myClick.bind(this)}>9</button></td>
                        <td rowSpan='4'><button name='submit' onClick={this.mySubmit.bind(this)}>=</button></td>
                    </tr>
                    <tr>
                        <td><button name='4' onClick={this.myClick.bind(this)}>4</button></td>
                        <td><button name='5' onClick={this.myClick.bind(this)}>5</button></td>
                        <td><button name='6' onClick={this.myClick.bind(this)}>6</button></td>

                    </tr>
                    <tr>
                        <td><button name='1' onClick={this.myClick.bind(this)}>1</button></td>
                        <td><button name='2' onClick={this.myClick.bind(this)}>2</button></td>
                        <td><button name='3' onClick={this.myClick.bind(this)}>3</button></td>
                    
                    </tr>
                    <tr>
                        <td><button name='0' onClick={this.myClick.bind(this)}>0</button></td>
                        <td><button name='.' onClick={this.myClick.bind(this)}>.</button></td>
                        <td><button name='C' onClick={this.myClick.bind(this)}>C</button></td>

                    </tr>
                </table>
                </div>
           </> 
        );
    }
}

export default Calculator;