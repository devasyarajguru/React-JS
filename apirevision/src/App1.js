import React from "react";
class App1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            myarr:[]
         };
    }

    componentDidMount()
    {
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(response => 
            {
                this.setState({myarr:response['products']});
            })
    }

    render() {
        return (
            <>
                {this.state.myarr.map((value) =>
                (
                    <div>
                        <table cellPadding={15} style={{fontSize:'30px'}} border={2}>
                            <tr>
                                <td>{value.id}</td>
                               <td> {value.title}</td>
                               <td><img src={value.images[0]}></img></td>
                            </tr>
                        </table>
                    </div>
                ))}
            </>
        );
    }
}

export default App1;