import { createSlice } from '@reduxjs/toolkit';
const initialState ={
    cartItems : localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem
        ("cartItems")) :[],
    cartQuantity:0,
   
}
const cartSlide = createSlice({
    name: "cart",
    initialState,
    reducers :{
        
        addToCart (state,action){
            // console.log("1233",action)
            const itemIndex =state.cartItems.findIndex(
                (item)=>item.id === action.payload.id,

            );

            if (itemIndex >= 0){
                state.cartItems[itemIndex].quantity +=1;
            }else {
                const temProduct ={...action.payload, cartQuantity :1}
                state.cartItems.push(temProduct);
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },
        changeProduct: (state, action) => {
            const indexProduct = state.findIndex(
              (data) => data.id === action.payload.id
            );
            if (indexProduct) {
              state[indexProduct] = { ...state[indexProduct], ...action.payload };
            }
          },
          removeProduct: (state, action) => {
            const indexProduct = state.cartItems.filter(
              (item) => item.id !== action.payload.id
            );
            state.cartItems=indexProduct;
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        getTotals(state, action){
            let {total,quantity}= state.cartItems.reduce(
                (cartTotal,cartItem)=>{
                    const {price,cartQuantity}=cartItem;
                    
                    const itemTotal=price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {total:0,
                quantity:0,}
                
            ) ;
            state.cartQuantity=quantity;
            
                },
           
            
        
    }
})
    
export const {addToCart,removeProduct,changeProduct,getTotals}=cartSlide.actions;
export default cartSlide;
