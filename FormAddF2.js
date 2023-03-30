import axios from "axios";
import React from "react";

function FormAddF2()
{
    const[data,mydataUpdate] = React.useState({});

    const handleChange = (event) =>
    {
        mydataUpdate((data)=>(
            {
                ...data,
                [event.target.name]:[event.target.value]
            }
        ))
    }

    const submitValue = (event) =>
    {
        event.preventDefault();
        var myformdata = new FormData();
        myformdata.append("st_name",data.txt1);
        myformdata.append("st_gender",data.txt2);
        myformdata.append("st_email",data.txt3);
        myformdata.append("st_mobileno",data.txt4);
        myformdata.append("st_password",data.txt5);

        axios.post('https://akashsir.in/myapi/crud/student-add-api.php',myformdata)
        .then(function(response)
        {
            console.log(response);
        })
    }

    return(
        <>
            <h1>Login post formdata</h1>
            <form onSubmit={submitValue}>
                <h2>Name<input type='text' name="txt1" onChange={handleChange}></input></h2>
                <h2>Gender<input type='text' name="txt2" onChange={handleChange}></input></h2>
                <h2>Email<input type='email' name="txt3" onChange={handleChange}></input></h2>
                <h2>Mobile No<input type='number' name="txt4" onChange={handleChange}></input></h2>
                <h2>Password<input type='password' name="txt5" onChange={handleChange}></input></h2>
                <h2><input type='submit'></input></h2>
            </form>
        </>
    );
}
export default FormAddF2;