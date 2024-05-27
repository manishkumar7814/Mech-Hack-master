import { createReducer } from "@reduxjs/toolkit";


const initialState = {
    cartItems: localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):
    {
        splendorTyre:{
            quantity:0,
            price:2000,
        },
        tvsTyre:{
            quantity:0,
            price:2000,
        },
        splendorPlusTyre: {
            quantity:0,
            price:2000,
        },

        

    },
    
    subTotal:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).subTotal:0,
    tax:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).tax:0,
    shippingCharges:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).shippingCharges:0,
    total:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).total:0,
    shippingInfo: localStorage.getItem("shippingInfo")
    ?JSON.parse(localStorage.getItem("shippingInfo"))
    :{}
    ,
};

export const cartReducer = createReducer(initialState,{
    splendorTyreIncrement: (state)=>{
        state.cartItems.splendorTyre.quantity += 1;
    },
    tvsTyreIncrement: (state)=>{
        state.cartItems.tvsTyre.quantity += 1;
    },
    splendorPlusTyreIncrement: (state)=>{
        state.cartItems.splendorPlusTyre.quantity += 1;
    },







    splendorTyreDecrement: (state)=>{
        state.cartItems.splendorTyre.quantity -= 1;
    },
    tvsTyreDecrement: (state)=>{
        state.cartItems.tvsTyre.quantity -= 1;
    },
    splendorPlusTyreDecrement: (state)=>{
        state.cartItems.splendorPlusTyre.quantity -= 1;
    },




    calculatePrice:(state)=>{
        state.subTotal = 
        state.cartItems.splendorTyre.price*state.cartItems.splendorTyre.quantity +
        state.cartItems.tvsTyre.price*state.cartItems.tvsTyre.quantity +
        state.cartItems.splendorPlusTyre.price*state.cartItems.splendorPlusTyre.quantity 

        state.tax = state.subTotal*0.18;
        state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
        state.total = state.subTotal+state.tax+state.shippingCharges;
    },

emptyState: (state) =>{
state.cartItems = {
    splendorTyre:{
        quantity:0,
        price:2000
    },
    tvsTyre:{
        quantity:0,
        price:2000,
    },
    splendorPlusTyre:{
        quantity:0,
        price:2000
    }
};


state.subTotal=0;
state.shippingCharges=0;
state.tax=0;
state.total=0;
},


addShippingInfo:(state,action)=>{
    state.shippingInfo = {
        hNo:action.payload.hNo,
        city:action.payload.city,
        state:action.payload.state,
        country:action.payload.country,
        pinCode:action.payload.pinCode,
        phoneNo:action.payload.phoneNo,
    }
}

});




