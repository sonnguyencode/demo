import { createSlice } from '@reduxjs/toolkit';
let initialState = {isLogin:false}
const loginSlice = createSlice({
    name: "isLogin",
    initialState,
    reducers :{
        handleLogin (state,action){
            // console.log(state);
            state.isLogin = true
        },
        handleLogout(state,action) {
            state.isLogin = false
        }
        
    }

})

export default loginSlice;
