import axios from 'axios';
import React from 'react';

function Practice4(props) {

    const[data,myUpdate] = React.useState({});

    const onChangeProcess = (event) =>
    {
        myUpdate((data)=>
        (
            {
                ...data,
                [event.target.name]:[event.target.value]
            }
        ))
    }

    const onSubmitValue = (event) =>
    {
        event.preventDefault();
        var myformdata = new FormData();
        myformdata.append('st_email',data.txt1);
        axios.post('https://akashsir.in/myapi/crud/student-forgot-password-api.php',myformdata)
        .then(function(response)
        {
            console.log(response);
            console.log(response.data.message);
        })
    }

    return (
        <>
            <form onSubmit={onSubmitValue}>
            <h1>Practice formdata using post data api</h1>
            <h2>Email <input type='email' name='txt1' onChange={onChangeProcess}></input></h2>
            <input type='submit'></input>
            </form>
        </>
    );
}

export default Practice4;