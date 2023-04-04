import axios from 'axios';
import React from 'react';
class StudentAdd extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            msg:''
        };
    }
    
    onchange(event)
    {
        event.preventDefault();
        var formdata = new FormData();
        formdata.append("st_name","Devasya");
        formdata.append("st_gender","male");
        formdata.append("st_email","hello@gmail.com");
        formdata.append("st_mobileno","9785623956");
        formdata.append("st_password","asety7u8i9o");

        axios.post('https://akashsir.in/myapi/crud/student-add-api.php',formdata)
        .then(function(response)
        {
            
            console.log(response);
            if(response.data.flag === '0')
            {
                // this.setState({msg:'Record already exist'});
                alert("Record already exist");
            }
        });     
    }

    render() {
        return (
            <>
                <h1>Added data through Axios-post-api formdata method</h1>
                <input type='button' value='Click Me' onClick={this.onchange.bind(this)}></input>
              
            </>
        );
    }
}

export default StudentAdd;