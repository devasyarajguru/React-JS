import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

   setdata()
   {
    localStorage.setItem('myname','Devasya');
    alert("Data is set");
   }

  getdata()
  {
    let a = localStorage.getItem('myname');
    
    if(a)
    {
      alert("Your data is " + a);
    }
    else
    {
      alert("Your data dosen't count");
    }
  }

  removedata()
  {
    localStorage.removeItem('myname');
    alert("Your data is removed");  
  }

  render() {
    return (
      <>
          <h1>Local Storage</h1>
          <button onClick={this.setdata.bind(this)}>Set</button>
          <button onClick={this.getdata.bind(this)}>Get</button>
          <button onClick={this.removedata.bind(this)}>Remove</button>
      </>
    );
  }
}

export default App;
