import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Test from './Test';



const rootElement = document.getElementById("root");

ReactDOM.render(

  <HashRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='test' element={<Test />} />
    </Routes>
  </HashRouter>,
  rootElement
);
// root.render(
//   <React.StrictMode></React.StrictMode>
// );
