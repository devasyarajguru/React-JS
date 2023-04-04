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
                this.setState({myarr:response["quotes"]});
                console.log(response);
                // alert(response.quotes[0);
            })
        
    }

    render()
    {
        return(
            <>

                {this.state.myarr.map(value =>
                    (
                        <table index={value.quote.id}>
                        
                            <tr>
                                <td>{value.quote}</td>
                                <td>{value.id}</td>
                                
                            </tr>
                        </table>
                    ))}
            </>
        );
    }
} 

export default App4;



