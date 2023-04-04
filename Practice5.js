import axios from 'axios';
import React from 'react';
class Practice5 extends React.Component {

    onSubmitValue(event)
    {
        event.preventDefault();
        var mydata = {
            "todo_title":"Bruce Wayne",
            "todo_details":"Batman",
        };

        var myjsondata = JSON.stringify(mydata);
        console.log(myjsondata);

        var customConfig = {
            headers:
            {
                'Content-Type':'application/json'
            }
        }

        axios.post('https://akashsir.in/myapi/crud/todo-add-json.php',myjsondata,customConfig)
        .then(function(response)
        {
            console.log(response);
        })
    }

    render() {
        return (
            <>
                <h1>JSON data through Post API</h1>
                    <input type='button' value='Click Me' onClick={this.onSubmitValue.bind(this)}></input>
            </>
        );
    }
}

export default Practice5;