import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css'
// import { useNavigate } from 'react-router-dom';


class Profile extends React.Component
{  
    

    render()
    {

        // const {navigate} = this.props;
        var a = 10;
        var b = 20;
        var c = a + b;
        var msg = '';

        if(c>50)
        {
            msg = "Value is greater than 50";
        }

        else
        {
            msg = "Value is lesser than 50 ";
        }

        var mycolor = {
            backgroundColor:'blue',
            color:'white',
            fontFamily:'Arial',
            textAlign:'center'     
        };

        var para = {
            fontSize:'20px',
            color:'red'
        };
        return(
            <>
           
                <h1 style={mycolor}>This is Profile Page</h1>
                <div style={para} className="para2">
                    <p>The value of a is {a}</p>
                    <p>The value of b is {b}</p>
                    <p>Sum of {a} and {b} is {c}</p>
                    <p>So therefore {msg}</p>
                    {/* <button onClick={()=>navigate('/Home')} className='conbutton'>Back</button> */}
                    <button onClick={this.greet.bind(this)} className='conbutton'>Back</button>

                </div>
            </>
        );
    }
}

export default Profile;