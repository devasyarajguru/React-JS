import './external.css'
import React from 'react';
class App4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            myarr:[]
         };
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(response =>
            {
                this.setState({myarr:response});
            })
    }

    render() {
        return (
            <>
            <div>
            <table border={2} className='mytable' cellPadding={32}>
                <tr>
                    
                    <td><b>ID</b></td>
                    <td><b>Image</b></td>
                    <td><b>Title</b></td>
                    <td><b>Price</b></td>
                    <td><b>Rating-rate</b></td>
                    
                </tr>

                {this.state.myarr.map((value)=>
                (
                        <tr>
                            <td>{value.id}</td>
                            <td><img src={value.image} style={{height:'150px'}}></img></td>
                            <td>{value.title}</td>
                            <td>{value.price}</td>
                            <td>{value.rating.rate}</td>

                        </tr>
                    
                ))}
                    </table>

                </div>
            </>
        );
    }
}

export default App4;