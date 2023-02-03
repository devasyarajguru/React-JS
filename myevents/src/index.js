import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Event from './Event';
// import CEvent from './CEvent';
// import App2 from './App2';
// import App3 from './App3';
// import Event2 from './Event2';
// import Event3 from './Event3';
// import State from './State';
// import State2 from './State2';
// import State4 from './State4';
// import State5 from './State5';
import SetState from './SetState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Event/> */}
    {/* <CEvent/> */}
    {/* <App2/> */}
    {/* <App3/> */}
    {/* <Event2/> */}
    {/* <Event3/> */}
    {/* <State/> */}
  {/* <State2/> */}
  {/* <State4/> */}
  {/* <State5/> */}
  <SetState/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
