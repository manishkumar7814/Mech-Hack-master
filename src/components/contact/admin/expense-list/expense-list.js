import React from 'react'
import "./expense-list.css"
import Card from './card'

import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const ExpenseListAdmin = () => {
    const {expenseList: list, query} = useSelector((state)=>state.expenses)
    const filteredList = list.filter(item=>item.title.includes(query))

    const notifySuccess= ()=> toast.success("Expense Deleted")

 
    return (
    <div className='expense-list'>
      <ToastContainer
position="bottom-left"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick

theme="light"
/>

{filteredList.length?filteredList.map(item=>(
        <Card item={item} notifySuccess={notifySuccess}/>
      )):<div className='empty-state'>
        {/* <img src={require('../../assets/images/empty-box.png')} alt="Empty List" className='empty-image'/> */}
        <label>Uh Oh! Your Mechanic List is empty</label>
        </div>
        }
    </div>
  )
      }

export default ExpenseListAdmin;
