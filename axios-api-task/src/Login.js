import React from 'react';
import './external.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import {FaArrowCircleLeft} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsKeyFill} from "react-icons/bs";

// import  {Button} from 'react-bootstrap';
// import * as Icon from 'react-bootstrap-icons';
// import 'bootstrap/dist/css/bootstrap.min.css';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
                <form>
                    <div className='container-login'>
                        <div>

                            {/* <Link to='/Signup'><Icon.ArrowLeft size={40}></Icon.ArrowLeft></Link> */}
                            {/* <Link to='/Signup'><button className='backbtn'>Back</button></Link> */}
                            {/* <Link to='/Signup'><Button variant="success">Back</Button></Link> */}
                            <Link to='/Signup'><FaArrowCircleLeft size={40}/></Link>
                        </div>
                        <h1 style={{textAlign:'center'}}>Login</h1>
                        <hr></hr>

                        <div className='main-login'>
                        <HiOutlineMail size={30} style={{marginBottom:'-8px'}}/> <label for="email"><b>Email</b></label><br/>
                        <input type="text" placeholder="Enter Email" name="email" required size='70'></input><br/><br/>

                        <BsKeyFill size={30} style={{marginBottom:'-8px'}}/> <label for="psw"><b>Password</b></label>&nbsp;&nbsp;<br/>
                        <input type="password" placeholder="Enter Password" name="psw" required size='70'></input><br/><br/>

                        <label>
                        <input type="checkbox" checked="checked" name="remember" style={{marginBottom:"15px"}}/> Remember me
                        </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <label><Link to='/Forget'>Forget Password?</Link></label>


                        <div className="clearfix">
                        <button type="button" class="cancelbtn"><Link to ='/Signup'>Cancel</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="submit" class="signupbtn">Login</button>
                        </div>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}

export default Login;