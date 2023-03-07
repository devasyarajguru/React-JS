// Api calling with funtional Component
import React from "react";

function App7()
{

    const[data,setdata] = React.useState([]);

    React.useEffect(
        ()=>
        {
            fetch('https://gorest.co.in/public/v2/users')
            .then(response => response.json())
            .then(data => setdata(data));
        }
    )

    return(
        <>

        <h2> Api calling with funtional Component</h2>

            {data.map((value) =>
            {
               return <div>
                <table border={3} cellPadding={15} cellSpacing={3}>
                    <tr>
                
                        <td>{value.id}</td>
                        <td> {value.name}</td>
                    </tr>
                </table>
               
               </div>
            })}

        </>
    );


}

export default App7;

/*
// Calling Map method in Functional Component inside return

{data.map((value)=>
    {

    return 
    <div></div>
    
    })}

*/