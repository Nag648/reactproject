import React from 'react';
import ReactDOM from 'react-dom/client';
//  import App from './App';
import reportWebVitals from './reportWebVitals';
// import Chessboard from './Chessboard';
// import Data from './Data';
// import Update from './Update';
// import Form from './Form';
// import Usetstates from './Usetstates'
// import Onchange from './Onchange';
import Mylogin from './Mylogin';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <App />
    <Chessboard /> */}
    {/* <Data /> */}
    {/* <Update /> */}
    {/* <Form /> */}
    {/* <Usetstates /> */}
    {/* <Onchange /> */}
    <Mylogin />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
