import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import State from './State';
// import SetSum from './SetSum';
// import Set2 from './Set2';
// import Counter from './Counter';
import SumUser from './SumUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <State></State> */}
    {/* <SetSum/> */}
    {/* <Set2></Set2> */}
    {/* <Counter/> */}
    <SumUser/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
