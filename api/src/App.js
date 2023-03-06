import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(dev=> dev.json())
      .then(dev=> console.table(dev));    
    }

  render() {
    return (
      <>
        <h1>JSON loading in the Component</h1>
      </>
    );
  } 
}

export default App;