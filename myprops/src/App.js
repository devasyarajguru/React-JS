import React from 'react';

class App extends  React.Component{
  render(){
    return(
      <>
        <h1>This is Props Example in Class Component</h1>
        {this.props.firstname}<br></br>
        {this.props.lastname}
      </>
    );
  }
}

export default App;
