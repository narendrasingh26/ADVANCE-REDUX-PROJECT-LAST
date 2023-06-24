import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
    },
    reducers:{
      addItemToCart(state,action){
       const newItem =action.payload
       const exisistingItem=state.items.find(item=>item.id===newItem.id)
       if(!exisistingItem){
        state.items.push({
            itemId:newItem.id,
            name:newItem.title,
            price:newItem.price,
            quantity:1,
            totalPrice:newItem.price
        })
       }else{
        exisistingItem.quantity++;
        exisistingItem.totalPrice=exisistingItem.totalPrice+newItem.price;

       }
      },
      removeItemToCart(state,action){
        const id= action.payload
       const exisistingItem=state.items.find(item=>item.id===id)
       if(exisistingItem.quantity===1){
             state.items=state.items.filter(item=>item.id!==id)
       }else{
        exisistingItem.quantity--;
        exisistingItem.totalPrice=exisistingItem.totalPrice-exisistingItem.price
       }

      }
    }
    
})
export default cartSlice.reducer
export const cartAction=cartSlice.actions