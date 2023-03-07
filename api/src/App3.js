import React from 'react';
class App3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            myarr:[]
         };
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
        .then(dev => dev.json())
        .then(dev => 
            {
                // console.log(dev);
                this.setState({myarr:dev});
            }
            
        )
    }

    render() {
        return (
            <>
         
            {this.state.myarr.map(value =>
            (
                <table border='1'>

                        <tr>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.category}</td>
                            <td>{value.rating.rate}</td>
                            <td>{value.rating.count}</td>
                            <img src={value.image} style={{height:'150px'}}></img>
                        </tr>
                    </table>
             
             
                  
            )
                
            )}
            </>
        );
    }
}

export default App3;