import axios from 'axios';
import React from 'react';


function FormAddF()
{

    const[myData,myDataUpdate] = React.useState({});

    const onChangeEvent =  (event) =>
    {
        myDataUpdate((myData) => (
            {
                ...myData,
                [event.target.name]:[event.target.value]
            }
        ));
    }

    const submitValue = (event) =>
    {
        event.preventDefault();
        var myformdata = new FormData();
        myformdata.append("st_name",myData.txt1);
        myformdata.append("st_gender",myData.txt2);
        myformdata.append("st_email",myData.txt3);
        myformdata.append("st_mobileno",myData.txt4);
        myformdata.append("st_password",myData.txt5);
        axios.post('https://akashsir.in/myapi/crud/student-add-api.php',myformdata)
        .then(function(response)
        {
            console.log(response);
        })
    }

    return(
        <>
            <h1>Post API formdata</h1>
            <form onSubmit={submitValue}>
            <h2>Name: <input type='text' name='txt1' onChange={onChangeEvent}></input></h2>
                    <h2>Gender: <input type='text' name='txt2' onChange={onChangeEvent}></input></h2>
                    <h2>Email: <input type='email' name='txt3' onChange={onChangeEvent}></input></h2>
                    <h2>Mob No: <input type='number' name='txt4' onChange={onChangeEvent}></input></h2>
                    <h2>Password: <input type='password' name='txt5' onChange={onChangeEvent}></input></h2> 
                    <input type='submit'></input>
            </form>
        </>
    );
}
export default FormAddF;