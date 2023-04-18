import axios from 'axios';
import React from 'react';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            txt1:'',
            txt2:'',
            txt3:'',
            txt4:'',
            txt5:'',
         };
    }
         onchangeProcess(event)
         {
            this.setState({[event.target.name]:[event.target.value]});
         }

         onSubmitProcess(event)
         {
            event.preventDefault();
            var mydata = new FormData();
            mydata.append("st_name",this.state.txt1);
            mydata.append("st_gender",this.state.txt2);
            mydata.append("st_email",this.state.txt3);
            mydata.append("st_mobileno",this.state.txt4);
            mydata.append("st_password",this.state.txt5);

            axios.post("https://akashsir.in/myapi/crud/student-add-api.php",mydata)
            .then(function(response)
            {
                console.log(response);

                if(response.data.flag === 1)
                {
                    alert(response.data.messsage);
                }
                
            })
         }

    
    render() {
        return (
            <>
                <form onSubmit={this.onSubmitProcess.bind(this)}>
                    <h1>Name: <input name='txt1' type='text' style={{padding:'8px'}} onChange={this.onchangeProcess.bind(this)}></input></h1>
                    <h1>Gender: <input name='txt2' type='text' style={{padding:'8px'}} onChange={this.onchangeProcess.bind(this)}></input></h1>
                    <h1>Email: <input name='txt3' type='email' style={{padding:'8px'}} onChange={this.onchangeProcess.bind(this)}></input></h1>
                    <h1>Mobile No: <input name='txt4' type='number' style={{padding:'8px'}} onChange={this.onchangeProcess.bind(this)}></input></h1>
                    <h1>Password: <input name='txt5' type='password' style={{padding:'8px'}} onChange={this.onchangeProcess.bind(this)}></input></h1>
                    <input type='submit' style={{padding:'8px'}}></input>
                </form>
            </>
        );
    }
}

export default Login;