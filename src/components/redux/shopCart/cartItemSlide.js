import { createSlice } from '@reduxjs/toolkit';
const initialState ={
    cartItems : [],
    cartQuantity:0,
    cartTotalAmount :0,
}
const cartSlide = createSlice({
    name: "cart",
    initialState,
    reducers :{
        
        addToCart (state,action){
            console.log("1233",action)
            const itemIndex =state.cartItems.findIndex(
                (item)=>item.id === action.payload.id
            );
            if (itemIndex>= 0){
                state.cartItems[itemIndex].cartQuantity +=1;
            }else {
                const temProduct ={...action.payload, cartQuantity :1}
                state.cartItems.push(temProduct);
            }
        }
    }
})
    











// export const {addToCart}=cartSlide.actions;
export default cartSlide;
//     name: 'cart',
//     initialState :{
//         showCart :false,
//         cartItems:[],
//     },
//     reducers :{
//         showCart(state) {
//             state.showCart = true;
//         },
//         hideCart (state){
//             state.showCart=false;
//         },
//         addToCart(state,action) {
//             const newItem =action.payload;
//             const index =state.cartItems.findIndex((x)=> x.id === newItem.id);
//             if (index >= 0 ){
//                 state.cartItems[index].quantity += newItem.quantity;
//             }else {
//                 state.cartItems.push(newItem)
//             }


//         },
//         setQuantity(state,action){
//             const {id,quantity}=action.payload;
//             const index=state.cartItems.findIndex((x)=>x.id===id);
//             if (index >= 0){
//                 state.cartItems[index].quantity=quantity;
//             }
//         },
//         removeCart (state,action){
//             const idNeedToRemove =action.payload;
//             state.cartItems=state.cartItems.filter((x)=>x.id !== idNeedToRemove)

//         },
//     }
   


    
// })
// const {actions, reducer}=cartSlide;
// export const {showCart, hideCart, addToCart, setQuantity,removeCart }=cartSlide.actions;
// export default reducer;