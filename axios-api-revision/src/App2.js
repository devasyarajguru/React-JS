import React from 'react';
import axios from 'axios';
class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { myarr:[] };
    }

    componentDidMount() {
        axios.get('https://akashsir.in/myapi/ecom1/api/api-subcategory-list.php')
        .then(res=>
            {
                this.setState({myarr:res.data.sub_category_list});
            })
    }

    render() {
        return (
            <>
                <h1>Subcategory</h1>
                <table border={2} cellPadding={10} style={{fontSize:'30px'}}>
                    <tr>
                        <td>sub_category_id</td>
                        <td>sub_category_name</td>
                        <td>category_id</td>
                        <td>category_name</td>
                        <td>sub_category_image</td>
                      
                    </tr>
                    {this.state.myarr.map((value)=>
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
}

export default App2;