import axios from 'axios';
import React from 'react';
class Practice6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            txt1:'',
            txt2:'',
            // txt3:''

         };
    }

    onChangeProcess(event)
    {
        this.setState({[event.target.name]:[event.target.value]});
    }

    onSubmitValue(event)
    {
        event.preventDefault()
        var mydata = 
        {
            // "todo_id": this.state.txt3,
            "todo_title":this.state.txt1,
            "todo_details":this.state.txt2
                
        }

        var myjsondata = JSON.stringify(mydata);
        console.log(myjsondata);
        var customConfig = {
            
            headers:
            {
                'Content-Type':'application/json'
            }
        };

        axios.post('https://akashsir.in/myapi/crud/todo-add-json.php',myjsondata,customConfig)
        .then(function(response)
        {
            console.log(response);
        })
    }

    render() {
        return (
            <>
                <h1>JSON form data post API</h1>
                <form onSubmit={this.onSubmitValue.bind(this)}>
                    {/* <h2>ID: <input type='number' name='txt3' onChange={this.onChangeProcess.bind(this)}></input></h2> */}
                    <h2>Title: <input type='text' name='txt1' onChange={this.onChangeProcess.bind(this)}></input></h2>
                    <h2>Details: <input type='text' name='txt2' onChange={this.onChangeProcess.bind(this)}></input></h2>
                    <input type='submit'></input>
                </form>
            </>
        );
    }
}

export default Practice6;