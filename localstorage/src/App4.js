import React from 'react';

function App4(props) {

    const [value,setvalue] = React.useState('LocalStorage');

    const setData = () =>
    {
        localStorage.setItem('field','React');
        setvalue("Your value is set");
    }

    const getdata = () =>
    {
        var a = localStorage.getItem('field');
        setvalue("Your value is " + a);
    }

    const removedata = () =>
    {
        localStorage.removeItem('field');
        setvalue("Your value is removed");
    }

    return (
        <div>
            <h1>Local Storage in Function Component</h1>

            <h2>Output:{value}</h2>
            <button onClick={setData}>Set</button>
            <button onClick={getdata}>Get</button>
            <button onClick={removedata}>Remove</button>
        </div>
    );
}

export default App4;