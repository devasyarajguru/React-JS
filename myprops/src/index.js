import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App6 from './App6';
import App7 from './App7';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import MyApp2 from './MyApp2';
// import App3 from './App3';
// import App4 from './App4';
// import Child from './Child';
// import FChild from './FChild';
// import App5 from './App5';
// import Header from './Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <App firstname = 'Devasya' lastname = 'Rajguru' />
    <MyApp2 firstname = 'Jainil' lastname = 'Harami'/>
    <App3 lastname='Patel'/>
    <App4 name="Devasya"/>
    <Child>Hello I am Child Content for Class Component</Child>
    <FChild>Hello I am Child Content for Functional Component</FChild>
    <App5><Header/></App5>  */}
    <App6></App6>
    <App7 firstname='Devasya' lastname='Rajguru' mobile='9848632'></App7>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
