import React, { useState } from 'react'
import './add-form.css'
import 'react-toastify/dist/ReactToastify.css';

// import { categories } from '../../constants/add-expense'
import { useDispatch } from 'react-redux';
import { addExpense } from '../../../../redux/actions/expenses';
import { ToastContainer, toast } from 'react-toastify';
import SuccessModal from './success-modal';

const AddForm = () => {
    // const cat = categories;
    const[categoryOpen, setCategoryOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [amount,setAmount] = useState("")
    const [phone,setPhone] = useState("")
    const [category,setCategory] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch= useDispatch();

    console.log("Clicked")

    const handleTitle=(e)=>{
        setTitle(e.target.value)
    }
    

    const handleAmount=(e)=>{
        const val = parseFloat(e.target.value)
        if(isNaN(val)){
            setAmount("")
            return
        }

        setAmount(val);
    }

    const handlePhone=(e)=>{
      const val = parseFloat(e.target.value)
      if(isNaN(val)){
          setPhone("")
          return
      }

      setPhone(val);
  }

    const handleCategory=(category)=>{
      setCategory(category)
      setCategoryOpen(false)

    }

    const handleSubmit=()=>{
      if(title==='' || amount ==="" ){
        const notify = () => toast("please enter valid data");
        notify();
        return;
      }
      const data={
        title,
        amount,
        phone,
        category,
        createdAt:new Date()
      };
      dispatch(addExpense(data))
      setModalOpen(true)

    }

  return (
    <div className='add-form'>

<ToastContainer
position="bottom-left"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick

theme="light"
/>

<SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />

      <div className="form-item">
        <label>Title</label>
        <input
         placeholder="Give a name to your expenditure" 
         value={title}
         onChange={(e)=>handleTitle(e)}
         />
      </div>


      <div className="form-item">
        <label>Phone No.</label>
        <input
         placeholder="Phone No." 
         value={phone}
         onChange={(e)=>handlePhone(e)}
         />
      </div>


      <div className="form-item">
        <label>Amount ₹ </label>
        <input value = {amount} 
               placeholder="Enter Amount"
               className="amount-input"
               onChange={(e)=>handleAmount(e)}
        />
      </div>


      {/* <div className="category-container-parent">
        <div className="category">
            <div className='category-dropdown' onClick={()=>setCategoryOpen(!categoryOpen)}>
                <label>{category?category.title:'Category'}</label>
                <i class="fi fi-rr-angle-down"></i>
            </div> */}
            {/* {categoryOpen&&<div className='category-container'>
                  {cat.map(category=>(
                    <div className='category-item' style={{
                      borderRight: `5px solid ${category.color}` 
                    }} 
                    key={category.id} 
                    onClick={()=>handleCategory(category)}>
                        <label>{category.title}</label>
                        <img src={category.icon}
                        alt={category.title}
                        />
                    </div>
                  ))}  
            </div>} */}
        {/* </div>
      </div> */}

      <div className='form-add-button'>
        <div onClick={handleSubmit}>
          <label>Add</label>
          <i class="fi fi-rr-paper-plane"></i>
        </div>
      </div>

    </div>
  )
}

export default AddForm
