import React from 'react';

class App4 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            myarr:[]
        };
        
    }

    componentDidMount()
    {
        // fetch('https://reqres.in/api/users')
        fetch('https://dummyjson.com/quotes')
        .then(response => response.json())
        .then(response =>
            {
                this.setState({myarr:response});
                console.log(response);
            })

            
    }

    render()
    {
        return(
            <>

                {this.state.myarr.map(value =>
                    (
                        <table index={value.quotes.id}>
                        
                            <tr>
                                <td>{value.quotes.id}</td>
                                <td>{value.total}</td>
                                {/* <td>{value.id}</td>
                                <td>{value.per_page}</td>
                                <td>{value.data.id}</td> */}
                            </tr>
                        </table>
                    ))}
            </>
        );
    }
} 

export default App4;



