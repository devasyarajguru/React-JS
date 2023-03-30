import axios from 'axios';
import React from 'react';
class Practice2 extends React.Component {
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

    onChangeProcess(event)
    {
        this.setState({[event.target.name]:[event.target.value]});
    }

    onSubmitValue(event)
    {
        event.preventDefault();
        var myformdata = new FormData();
        myformdata.append('st_name',this.state.txt1);
        myformdata.append('st_gender',this.state.txt2);
        myformdata.append('st_email',this.state.txt3);
        myformdata.append('st_mobileno',this.state.txt4);
        myformdata.append('st_password',this.state.txt5);
        axios.post('https://akashsir.in/myapi/crud/student-add-api.php',myformdata)
        .then(function(response)
        {
            console.log(response);
        })
    }

    render() {
        return (
            <>
            <form onSubmit={this.onSubmitValue.bind(this)}>
                <h1>Practice Form data post API</h1>
               <h2> Name <input type='text' name='txt1' onChange={this.onChangeProcess.bind(this)}></input></h2>
               <h2> Gender <input type='text' name='txt2' onChange={this.onChangeProcess.bind(this)}></input></h2>
               <h2> Email <input type='email' name='txt3' onChange={this.onChangeProcess.bind(this)}></input></h2>
               <h2> Number <input type='number' name='txt4' onChange={this.onChangeProcess.bind(this)}></input></h2>
               <h2> Password <input type='password' name='txt5' onChange={this.onChangeProcess.bind(this)}></input></h2>
               <input type='submit' value='Click Me'></input>
               </form>
            </>
        );
    }
}

export default Practice2;