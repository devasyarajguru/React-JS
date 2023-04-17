import React from 'react';
class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {

        var myarray = [
            {firstname:'Devasya', lastname:'Rajguru'},
            {firstname:'Kush', lastname:'Patel'},
            {firstname:'Gunj', lastname:'Trivedi'}
        ]

        return (
            <>

              
                <h1>Table</h1>
                <table border={2}>
                <thead>
                    <tr>
                    <th><b>Index</b></th>
                    <th><b>FirstName</b></th>
                    <th><b>LastName</b></th>
                    </tr>
                </thead>
                <tbody>
                    {myarray.map((element,index)=>
                    (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{element.firstname}</td>
                            <td>{element.lastname}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Map;