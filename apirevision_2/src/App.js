import React from 'react';
import './external.css'

function App()
{

  const[data,setdata] = React.useState([]);

  React.useEffect(()=>
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setdata(data));
  },[])

  return(
    <>
    <table border={2} cellPadding={12} >
        <tr id='row'>
          <td>ID</td>
          <td>Name</td>
          <td>Address/Street</td>
          <td>Address/Geo/Lat</td>
          <td>Phone</td>
          <td>Website</td>
          <td>Company Name</td>
        </tr>
        
  {data.map((value)=>
  (
          
        <tr id='row2'>
          <td>{value.id}</td>
          <td>{value.name}</td>
          <td>{value.address.street}</td>
          <td>{value.address.geo.lat}</td>
          <td>{value.phone}</td>
          <td>{value.website}</td>
           <td>{value.company.name}</td>

          </tr>
          
        
  ))}
    </table>

    </>
  );
}

export default App;