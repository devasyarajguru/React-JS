import axios from 'axios';
import React from 'react';
class FormAdd extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            Name:'',
            gender:'',
            Email:'',
            Mob:'',
            pass:'',
        };
    }

    onChange(event)
    {
        this.setState({[event.target.name]:[event.target.value]});
    }

    onSubmitclick(event)
    {
        event.preventDefault();

        var mydata = new FormData();

        mydata.append("st_name",this.state.Name);
        mydata.append("st_gender",this.state.gender);
        mydata.append("st_email",this.state.Email);
        mydata.append("st_mobileno",this.state.Mob);
        mydata.append("st_password",this.state.pass);
        axios.post('https://akashsir.in/myapi/crud/student-add-api.php',mydata)
        .then(function(response)
        {
            console.log(response);
        })
    }

    render()
    {
        return(
            <>
                <h1>Form values in formdata</h1>
                <form onSubmit={this.onSubmitclick.bind(this)}>
                    <h2>Name: <input type='text' name='Name' onChange={this.onChange.bind(this)}></input></h2>
                    <h2>Gender: <input type='text' name='gender' onChange={this.onChange.bind(this)}></input></h2>
                    <h2>Email: <input type='email' name='Email' onChange={this.onChange.bind(this)}></input></h2>
                    <h2>Mob No: <input type='number' name='Mob' onChange={this.onChange.bind(this)}></input></h2>
                    <h2>Password: <input type='password' name='pass' onChange={this.onChange.bind(this)}></input></h2>
                    <input type='submit'></input>
                </form>
            </>
        );
    }
}
export default FormAdd;