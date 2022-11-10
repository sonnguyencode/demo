import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/navigate/ScollToTop';

import store from "../src/components/redux/shopCart/store";
import { getTotals } from './components/redux/shopCart/cartItemSlide';


store.dispatch(getTotals())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     
    <BrowserRouter>
    <ScrollToTop/>
   
    <Provider store={store}>
    
    <App />
    
    </Provider>
    
    
    </BrowserRouter>
  </React.StrictMode>,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals