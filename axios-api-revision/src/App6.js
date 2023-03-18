import axios from 'axios';
import React from 'react';

function App6(props) {

    const[data,setdata] = React.useState([]);

    React.useEffect(()=>
    {
        axios.get('https://akashsir.in/myapi/ecom1/api/api-view-category.php')
        .then(res=>
            {
                setdata(res.data.category_list);
            })
    })

    return (
        <>
            <h1>Category</h1>
                <table border={2} cellPadding={10} style={{fontSize:'30px'}}>
                    <tr>
                        <td>category_id</td>
                        <td>category_name</td>
                        <td>category_image</td>
                      
                    </tr>
                    {data.map((value,index)=>
                    (
                        <tr key={index}>
                            <td>{value.category_id}</td>
                            <td>{value.category_name}</td>
                            <td><img src={value.category_image}></img></td>
                        </tr>
                    ))}
                </table>
        </>
    );
}

export default App6;