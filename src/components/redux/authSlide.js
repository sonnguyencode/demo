import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
 


let initialState ={
    user :"",
    token :"",
    loading:false
}
export const loginUser = createAsyncThunk('user',async(body)=>{

    let res =await fetch("https://fakestoreapi.com/auth/login",{
        method: "Post",
        headers:{
            'Content-Type':'application/json',
            Authorization :localStorage.getItem("token")
        },
        body:JSON.stringify({
        
        })
    })
    return await res.json();
})
const authSlide =createSlice({
    name:"user",
    initialState,
    reducers :{
        addToken:(state,action)=>
        {
            state.token=localStorage.getItem("token")
        },
        addUser:(state,action)=>
        {
            state.user=localStorage.getItem("user")
        },
       
        
    },
    extraReducers:{
        [loginUser.pending]:(state,action)=>{
            state.loading = true
        },
        [loginUser.fulfilled]:(state,{payload:{user,token}})=>{
            state.loading = false
            state.token =token;
            state.user =user;
            localStorage.setItem("token",JSON.stringify(token))
            localStorage.setItem("user",JSON.stringify(user))
        },
        [loginUser.rejected]:(state,action)=>{
            state.loading = true
        },
        
        
        
    }
})
export const {addToken,addUser}=authSlide.actions;
export default authSlide.reducer;