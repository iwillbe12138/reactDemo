/*
 * @Description:
 * @Author: iwillbe12138
 * @Date: 2021-02-24 15:53:12
 * @LastEditTime: 2021-02-27 22:27:04
 * @LastEditors:
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ToDoList from './demo/ToDoList'

//jsx js 与xml 结合  <  解析成html   {} 解析成

ReactDOM.render(<ToDoList />, document.getElementById('root'))

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
