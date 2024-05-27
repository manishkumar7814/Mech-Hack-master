import React, { useState } from 'react'
import "./topfold.css"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchExpense } from '../../../../redux/actions/expenses'

function TopFold() {
    const [query, setQuery] = useState("")
    const dispatch=useDispatch()
    const handleQuery=(e)=>{
        setQuery(e.target.value)
        dispatch(searchExpense(e.target.value))
    }
  return (
    <div className='topfold'>
      <div className="home-topfold">
        <div className="searchbar">
        <i class="fi fi-rr-search"></i>
        <input placeholder='Search for Location'
         value={query}
          onChange={(e)=>handleQuery(e)}
          />
        </div>
       </div>
    </div>
  )
}

export default TopFold