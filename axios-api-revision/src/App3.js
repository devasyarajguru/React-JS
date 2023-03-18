import React from 'react';
import axios from 'axios';
class App3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { myarr:[] };
    }

    componentDidMount() {
        axios.get('https://akashsir.in/myapi/ecom1/api/api-view-category.php')
        .then(res=>
            {
                this.setState({myarr:res.data.category_list});
            })
    }

    render() {
        return (
            <>
                <h1>Category</h1>
                <table border={2} cellPadding={10} style={{fontSize:'30px'}}>
                    <tr>
                        <td>category_id</td>
                        <td>category_name</td>
                        <td>category_image</td>
                      
                    </tr>
                    {this.state.myarr.map((value)=>
                    (
                        <tr>
                           
                            <td>{value.category_id}</td>
                            <td>{value.category_name}</td>
                            <td><img src={value.category_image}></img></td>
                        </tr>
                    ))}
                </table>
            </>
        );
    }
}

export default App3;