import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Fdemo from './Fdemo'; // Importing Our 1st Functional Component
import Fdemo2 from './Fdemo2'; // Importing Our 2nd Functional Component
import Cdemo from './Cdemo';
import Cdemo2 from './Cdemo2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Fdemo /> {/* Displaying Our 1st Functional Component */}
    <Fdemo /> {/* Displaying Our 1st Functional Component 2 time */}
    <Fdemo2 />{/* Displaying Our 2nd Functional Component */}
    <Fdemo2 />{/* Displaying Our 2nd Functional Component 2 time */}
    <br></br> {/*Break Line */}
    <Cdemo /> {/* Displaying Our 1st Class Component */}
    <Cdemo2/> {/* Displaying Our 2nd Class Component */}
  </React.StrictMode>
);


reportWebVitals();
