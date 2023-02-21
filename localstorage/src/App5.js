import React from 'react';

function App5(props) {

    const [value,setvalue] = React.useState('LocalStorage');

    const setdata = () => 
    {
        localStorage.setItem('sem',5);
        setvalue("Your value is set");
    }

    const getdata = () =>
    {
        var a = localStorage.getItem('sem');
        setvalue("Your sem is "+a);
    }

    const removedata = () =>
    {
        localStorage.removeItem('sem');
        setvalue("Your value is removed");
    }

    return (
        <div>
            <h1>LocalStorage in functional Component</h1>
            Output is: {value}
            <button onClick={setdata}>Set</button>
            <button onClick={getdata}>Get</button>
            <button onClick={removedata}>Remove</button>
        </div>
    );
}

export default App5;