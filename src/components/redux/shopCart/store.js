import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from "redux";
import authSlide from "../authSlide"
import cartSlide from '../shopCart/cartItemSlide';




const store=configureStore ({
    reducer:{
        cart:cartSlide.reducer,
        user:authSlide
        
       
    }
    
})
console.log(store);

//  export default mainReducer;
export default store ;
