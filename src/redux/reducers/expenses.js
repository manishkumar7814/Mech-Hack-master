import { createReducer } from "@reduxjs/toolkit";
import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../actions/expenses"



const initialList=()=>{
    const list = localStorage.getItem("expense-list")
    let expenses=[];
    if(list){
        expenses = JSON.parse(list)
    }
    return expenses
}

const initialState = {
    expenseList: initialList(),
    query : "",
};

// export const expenseReducer=(state=initialState, action)=>{
//     switch(action.type){

//         case ADD_EXPENSE:{
//             localStorage.setItem("expense-list", JSON.stringify([...state.expenseList, action.data]))
//             return{
//                 ...state,
//                 expenseList:[...state.expenseList, action.data]
//             }
//         }


//         case DELETE_EXPENSE:{
//             const { data } = action;
//             const updatedList = state.expenseList.filter(
//                 item=>item.createdAt!==data.createdAt
//             );
//             localStorage.setItem("expense-list",JSON.stringify(updatedList))
//             return{
//                 ...state,
//                 expenseList: updatedList,
//             }
//         }


//         case SEARCH_EXPENSE:{
//             const {query}=action
//             return {
//                 ...state,
//                 query,
//             }
//         }

//         default:
//             return state;
//     }
// };



export const expenseReducer = createReducer(initialState,{
    ADD_EXPENSE:(state,action)=>{
        localStorage.setItem("expense-list", JSON.stringify([...state.expenseList, action.data]))
            return{
                ...state,
                expenseList:[...state.expenseList, action.data]
            }
    },

    DELETE_EXPENSE:(state,action)=>{
        const { data } = action;
            const updatedList = state.expenseList.filter(
                item=>item.createdAt!==data.createdAt
            );
            localStorage.setItem("expense-list",JSON.stringify(updatedList))
            return{
                ...state,
                expenseList: updatedList,
            }
    },

    SEARCH_EXPENSE:(state,action)=>{
        const {query}=action
            return {
                ...state,
                query,
            }
    }

})