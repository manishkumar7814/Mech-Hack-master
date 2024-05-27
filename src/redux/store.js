import {configureStore} from "@reduxjs/toolkit";
import { authReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import {orderReducer, ordersReducer} from "./reducers/orderReducer";
import { adminReducer } from "./reducers/adminReducer";
import { expenseReducer } from "./reducers/expenses";

const store = configureStore({
    reducer: {
        auth:authReducer,
        cart: cartReducer,
        order:orderReducer,
        orders:ordersReducer,
        admin: adminReducer,
        expenses:expenseReducer,
    },
});




export default store;


export const server = "https://hack-wfs3.onrender.com/api/v1";


