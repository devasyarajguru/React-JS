import axios from 'axios';
import React from 'react';
class JSONname extends React.Component {

    onSubmitProcess(event)
    {
        event.preventDefault();

        var mydata = 
        {
            "todo_title":"Peter Parker",
            "todo_details":"Spiderman",
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
            console.warn(response)
        });
    }

    render() {
        return (
            <>
                <h1>JSON data through Post API</h1>
                <input type='button' value='Add Record' onClick={this.onSubmitProcess.bind(this)}></input>
            </>
        );
    }
}

export default JSONname;