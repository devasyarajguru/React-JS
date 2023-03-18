import axios from 'axios';
import React from 'react';

function App5(props) {

    const[data,setdata] = React.useState([]);

    React.useEffect(()=>
    {
        axios.get('https://akashsir.in/myapi/ecom1/api/api-subcategory-list.php')
        .then(res=>
            {
                setdata(res.data.sub_category_list);
            })
    })

    return (
        <>
            <h1>Product</h1>
                <table border={2} cellPadding={10} style={{fontSize:'30px'}}>
                    <tr>
                    <td>sub_category_id</td>
                        <td>sub_category_name</td>
                        <td>category_id</td>
                        <td>category_name</td>
                        <td>sub_category_image</td>
                    </tr>
                    {data.map((value)=>
                    (
                        <tr>
                            <td>{value.sub_category_id}</td>
                            <td>{value.sub_category_name}</td>
                            <td>{value.category_id}</td>
                            <td>{value.category_name}</td>
                            <td><img src={value.sub_category_image}></img></td>
                        </tr>
                    ))}
                </table>
        </>
    );
}

export default App5;