import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from "redux";
import userReducer from '../reducers';
import cartSlide from '../shopCart/cartItemSlide';




const store=configureStore ({
    reducer:{
        cart:cartSlide.reducer,
        user :userReducer.reducer
       
    }
    
})
console.log(store);

//  export default mainReducer;
export default store ;
