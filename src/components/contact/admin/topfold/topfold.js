import React, { useState } from 'react'
import "./topfold.css"
import { Link, NavLink } from 'react-router-dom'
import { searchExpense } from '../../../../redux/actions/expenses'

import { useDispatch } from 'react-redux'
import AddForm from '../add-form/add-form'


function TopFoldAdmin() {
    const [query, setQuery] = useState("")
    const dispatch=useDispatch()
    const handleQuery=(e)=>{
        setQuery(e.target.value)
        dispatch(searchExpense(e.target.value))
    }



    const [showElement, setShowElement] = useState(false);

    function changeState(){
      setShowElement(!showElement)
    }
    


  return (
    <>
    <div className='topfold'>
      {window.location.pathname==='/contact' ?  <div className="home-topfold">
        <div className="searchbar">
        <i class="fi fi-rr-search"></i>
        <input placeholder='Search for Location'
         value={query}
          onChange={(e)=>handleQuery(e)}
          />
        </div>
        
        {/* <Link to='/add-expense'> */}
        
        {
          !showElement && <div className="add-button" onClick={changeState}>
          <i class="fi fi-rr-add">Add</i>
          </div>
        }

          {
            showElement && <AddForm/>
          }
        
       </div>
       

      : 

      (

        
          
        

        <div className="add-topfold">
          <Link to='/contact'>
          <div className='add-topfold-button'>
          <i class="fi fi-rr-angle-left"></i>
            <label>Back</label>
          </div>
          </Link>


          <Link to='/contact'>
          <div className='add-topfold-button'>
          <i class="fi fi-rr-cross-circle"></i>
            <label>Cancel</label>
          </div>
          </Link>

        </div>
      )
      }
      
    </div>

    </>
  )
}

export default TopFoldAdmin
