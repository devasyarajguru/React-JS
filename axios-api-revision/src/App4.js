import axios from 'axios';
import React from 'react';

function App4(props) {

    const[data,setdata] = React.useState([]);

    React.useEffect(()=>
    {
        axios.get('https://akashsir.in/myapi/ecom1/api/api-view-product.php')
        .then(res=>
            {
                setdata(res.data.product_list);
            })
    })

    return (
        <>
            <h1>Product</h1>
                <table border={2} cellPadding={10} style={{fontSize:'30px'}}>
                    <tr>
                        <td>Product_id</td>
                        <td>Product_name</td>
                        <td>Product_details</td>
                        <td>Product_price</td>
                        <td>Product_image</td>
                    </tr>
                    {data.map((value)=>
                    (
                        <tr>
                            <td>{value.product_id}</td>
                            <td>{value.product_name}</td>
                            <td>{value.product_details}</td>
                            <td>{value.product_price}</td>
                            <td><img src={value.product_image}></img></td>
                        </tr>
                    ))}
                </table>
        </>
    );
}

export default App4;