import React from "react";

class App extends React.Component
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
    fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(response=>{
      this.setState({myarr:response['products']});
    })
  }

  render()
  {
    return(
      <>
        <h1>Api Calling in Class Component</h1>
        {this.state.myarr.map(value=>
        (
          
        
          <table border={2} cellPadding={12}>
            <tr style={{fontSize:'30px'}}>
              <td> {value.id}</td>
              <td>{value.title}</td>
              <td>{value.price} RS</td>
              <td><img src={value.images[0]} style={{height:'200px',width:'250px'}} alt={'img'}></img></td>
            </tr>
            </table>
            
        ))}
      </>
    );
  }
}

export default App;