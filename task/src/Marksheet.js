import React from "react";
import './style.css';

class Marksheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            txt1:'',
            number:'',
            no1:'',
            no2:'',
            no3:'',
            total:'',
            per:'',
            grade:''

         };
    }

    myevent(event)
    {
        this.setState({[event.target.name]:[event.target.value]});
        event.preventDefault();
    }

    mytotal(event)
    {
        var a = parseInt(this.state.no1);
        var b = parseInt(this.state.no2);
        var c = parseInt(this.state.no3);

        var x = (a+b+c);
        var y = ((x/300)*100)
        this.setState({total:x});
        this.setState({per:y});
        event.preventDefault();

        if(y>80)
        {
            this.setState({grade:'Congratulations , You got A grade'});
        }

        else if(y<80 && y>60)
        {
            this.setState({grade:'You got B grade'});
        }

        else if(y<60 && y>40)
        {
            this.setState({grade:'You got C grade'});
        }

        else if(y<40)
        {
            this.setState({grade:'You are Fail'});
        }
    }

    render() {
        return (
            <>
            <form onSubmit={this.mytotal.bind(this)} className='myform'>
    
                <h1 style={{margin:'auto',textAlign:'center',marginTop:'25px',marginBottom:'20px',fontSize:'35px',}}>Marksheet Program</h1><br/>
                <div className="container">

                <b>Enter Name:</b><input type='text' name='txt1' autoComplete="off" onChange={this.myevent.bind(this)}></input><br/><br/>

                <b>Enter Enrollment No:</b><input type='number' name="number" autoComplete="off" onChange={this.myevent.bind(this)}></input><br/><br/>

                <b>Enter Marks of Maths:</b><input type='number' name="no1" autoComplete="off" onChange={this.myevent.bind(this)}></input><br/><br/>

                <b>Enter Marks of Science:</b><input type='number' name="no2" autoComplete="off" onChange={this.myevent.bind(this)}></input><br/><br/>

                <b>Enter Marks of English:</b><input type='number' name="no3" autoComplete="off" onChange={this.myevent.bind(this)}></input><br/><br/>

                <input type='submit' className="submitbtn"></input><br/><br/>

                <div className="output">
                <b>Total Marks:</b> <div className="ansOutput">{this.state.total}</div><br/><br/>
                <b>Percentage:</b> <div className="ansOutput">{this.state.per}</div><br/><br/>
                <b>Grade:</b> <div className="ansOutput">{this.state.grade}</div>
                </div>

                </div>
            </form>
            </>
        );
    }
}

export default Marksheet;