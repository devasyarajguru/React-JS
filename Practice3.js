import axios from "axios";
import React from "react";

function Practice3()
{

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

    const onSubmitvalue = (event) =>
    {
        event.preventDefault(); 
        var myformdata2 = new FormData();
        myformdata2.append('st_id',data.id);
        myformdata2.append('st_name',data.Name);
        myformdata2.append('st_gender',data.gender);
        myformdata2.append('st_email',data.email);
        myformdata2.append('st_mobileno',data.mob);
        axios.post('https://akashsir.in/myapi/crud/student-edit-api.php',myformdata2)
        .then(function(response)
        {
            console.log(response);
        })
    }

    return(
        <>
            <h1>Practice formdata post API</h1>
            <form onSubmit={onSubmitvalue}>
                <h2>Enter ID<input type='number' name="id" onChange={onChangeProcess}></input></h2>
                <h2>Name<input type='text' name="Name" onChange={onChangeProcess}></input></h2>
                <h2>Gender<input type='text' name="gender" onChange={onChangeProcess}></input></h2>
                <h2>Email<input type='text' name="email" onChange={onChangeProcess}></input></h2>
                <h2>Mobile No<input type='text' name="mob" onChange={onChangeProcess}></input></h2>
               <input type='submit' value='Click Me'></input>
            </form>
        </>
    );
}
export default Practice3;