import React from 'react';
import './external.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Login from './Login';
import {BsFillPersonFill} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";
import {BsKeyFill} from "react-icons/bs";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            psw:'',
            pswrepeat:''
         };
    }

    onChangeProcess(event)
    {
        this.setState({[event.target.name]:[event.target.value]})
        event.preventDefault();
        console.log(event.target.value);

    }

    onSubmit(event)
    {
       console.log()
        
    }

    render() {
        return (
            <>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className='container'>
                        <h1 style={{textAlign:'center'}}>Sign Up</h1>
                        <hr></hr>

                        <div className='main'>

                       <BsFillPersonFill size={30} style={{marginBottom:'-5px'}}/> <label for="email"><b>FirstName</b></label>
                        <input type="text" placeholder="Enter FirstName" name="email" required size='40' onChange={this.onChangeProcess.bind(this)}></input><br/><br/>

                      <BsFillPersonFill size={30} style={{marginBottom:'-5px'}}/>  <label for="email"><b>LastName</b></label>
                        <input type="text" placeholder="Enter LastName" name="email" required size='40' onChange={this.onChangeProcess.bind(this)}></input><br/><br/>


                        <HiOutlineMail size={30} style={{marginBottom:'-8px'}}/> <label for="email"><b>Email</b></label><br/>
                        <input type="text" placeholder="Enter Email" name="email" required size='70' onChange={this.onChangeProcess.bind(this)}></input><br/><br/>

                        <BsKeyFill size={30} style={{marginBottom:'-8px'}}/><label for="psw"> <b>Password</b></label>&nbsp;&nbsp;<br/>
                        <input type="password" placeholder="Enter Password" name="psw" required size='70' onChange={this.onChangeProcess.bind(this)}></input><br/><br/>

                        <BsKeyFill size={30} style={{marginBottom:'-8px'}}/><label for="psw"> </label><label for="psw-repeat"><b>Repeat Password</b></label>&nbsp;&nbsp;<br/>
                        <input type="password" placeholder="Repeat Password" name="pswrepeat" required size='70' onChange={this.onChangeProcess.bind(this)}></input><br/><br/>
                        
                        <label>
                        <input type="checkbox" checked="checked" name="remember" style={{marginBottom:"15px"}}/> Remember me
                        </label>

                        <div className="clearfix">
                        <button type="button" className="cancelbtn"><Link to='/Signup'>Cancel</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to='/Login'> <input type="submit" className="signupbtn" ></input></Link>
                        
                        </div>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}

export default Signup;