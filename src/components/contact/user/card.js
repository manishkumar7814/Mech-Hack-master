import React from 'react'
import './card.css'
// import moment from 'moment/moment';
import { deleteExpense } from '../../../redux/actions/expenses';

import { useDispatch } from 'react-redux';

const Card = ({item , notifySuccess}) => {
//   const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();

  // const handleDelete=()=>{
  //   dispatch(deleteExpense(item));
  //   notifySuccess();
  // }
  console.log(item);
  return (
    <div className='card' >
      <div className='card-image-container'>
        {/* <img src={item.category.icon} alt={item.category.title} className='card-image' /> */}
      </div>

      <div className='card-info'>
        <label className='card-title'>{item.title}</label>
        <label className='card-time'>{item.phone}</label>
      </div>


      <div className='card-right'>
        <div>
          <label className='card-amount'>Min ₹ {item.amount}</label>
        </div>

        {/* <div className='delete-icon' onClick={handleDelete}>
        <i class="fi fi-rr-trash">Clear</i>
        </div> */}

      </div>


    </div>
  )
}

export default Card