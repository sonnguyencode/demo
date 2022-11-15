import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { combineReducers } from '@reduxjs/toolkit';
import authSlide from "./authSlide";
import loginSlice from './login/loginSlice';
import cartSlide from './shopCart/cartItemSlide';


const persistConfig = {
    key: 'root',
    storage,
  }


  const reducer =combineReducers({
    cart:cartSlide.reducer,
    user:authSlide,
    isLogin:loginSlice.reducer

  })
const persistedReducer =persistReducer(persistConfig,reducer)
const store=configureStore ({
    reducer:persistedReducer
        
})
// console.log(store);

//  export default mainReducer;
export default store ;
