import React from 'react'
import ExpenseList from './user/expense-list'
import './contact.css'
import TopFold from './user/topfold/topfold'
import ExpenseListAdmin from './admin/expense-list/expense-list'
import TopFoldAdmin from './admin/topfold/topfold'
import { useDispatch, useSelector } from 'react-redux'








const Contact = ()=>{

    const dispatch = useDispatch();
    const {user} = useSelector(state=>state.auth);



    return (
        <div className="contact">


            {
                user.role==="admin"? 
                <>
                    <TopFoldAdmin/> 
                    <ExpenseListAdmin/>
                </>
                
                
                : 
                <>
                <TopFold/>
                <ExpenseList/>
                </>
    
            }


            {/* <TopFold/>
            <ExpenseList/> */}



            {/* <TopFoldAdmin/>
            <ExpenseListAdmin/> */}
            
            {/* console.log(window.location.pathname); */}

        </div>
    )
}

export default Contact
