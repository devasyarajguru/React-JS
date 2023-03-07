import React from "react";

class App8 extends React.Component
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
        fetch('https://gorest.co.in/public/v2/users')
        .then(response=> response.json())
        .then(response => 
            {
                this.setState({myarr:response});
            }
            )
    }

    render()
    {
        return(
            <>
              
                {this.state.myarr.map((value)=>
                {
                    return <div>
                        
                            <table border={2} cellPadding={15}>

                            <tr>
                                <td> {value.id}</td>
                                <td> {value.name}</td>
                                <td> {value.email}</td>
                                <td> {value.gender}</td>
                                <td> {value.status}</td>
                            </tr>
                        </table>
                       
                    </div>
                })}
            </>
        );
    }
}

export default App8;