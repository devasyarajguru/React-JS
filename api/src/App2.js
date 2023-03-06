import React from 'react';
class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            myarr:[]
         };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(devasya => devasya.json())
        .then(devasya =>
            {
                this.setState({myarr:devasya});
            })
    }

    render() {
        return (
            <>
             {this.state.myarr.map(value =>
             (
                <table border={1} cellPadding='15' cellSpacing='2' style={{textAlign:'center' ,}}>
                    <tr>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.username}</td>
                        <td>{value.email}</td>
                        <td>{value.phone}</td>
                    </tr>
                
                </table>
             )
             )}
            </>
        );
    }
}

export default App2;