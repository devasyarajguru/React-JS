import React from 'react';
import './external.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import {FaArrowCircleLeft} from "react-icons/fa";

class Forget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
                <form>
                    <div className='container-forget'>
                    <div>
                            {/* <Link to='/Login'><button className='backbtn'>Back</button></Link> */}
                            <Link to='/Login'><FaArrowCircleLeft size={40}/></Link>
                        </div>
                        <h1 style={{textAlign:'center'}}>Forgot Password</h1>
                        <hr></hr>
                        <p className='enteremail'>Enter your email address</p>

                        <div className='main-forget'>
                        <label for="email"><b></b></label><br/>
                        <input type="text" placeholder="Enter Email" name="email" required size='50'></input><br/><br/>

                        <div className="clearfix">
                            <button className='signupbtn-forget'>Forget Password</button>
                        </div>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}

export default Forget;