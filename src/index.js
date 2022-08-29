import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Nav from './Nav'
import List from './List'

import reportWebVitals from './reportWebVitals';


function Up (){
  return (
     
      <div className='component'>
     <Nav />
     <List />
     </div>
    )

}
ReactDOM.render(<Up /> , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
