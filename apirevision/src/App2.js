import React from 'react';

class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            myarr:[]
         };
    }

    componentDidMount()
    {
        fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(response =>
            {
                this.setState({myarr:response['data']});
                // console.log(response);
            })
    }

    render() {
        return (
            <>
                {this.state.myarr.map((value)=>
                (
                    <div>
                        <table border={2} cellPadding={12}>
                            <tr>
                                <td>{value.id}</td>
                                <td>{value.email}</td>
                                <td>{value.total}</td>
                            </tr>
                        </table>
                    </div>
                ))}
            </>
        );
    }
}

export default App2;