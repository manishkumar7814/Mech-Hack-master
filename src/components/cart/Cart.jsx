import React, { useEffect } from 'react'
import splendor from "../../assets/rear_splendor-tyre.jpeg";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const CartItem = ({value,title,img,increment,decrement})=>
(
    <div className="cartItem">
        <div>
            <h4>{title}</h4>
            {/* <img src={img} alt="Spare_Part" /> */}
        </div>


        <div>
            <button onClick={decrement}>-</button>
            <input type="number" readOnly value={value}/>
            <button onClick={increment}>+</button>

        </div>
    </div>
)



const Cart = () => {

    
    const {
        cartItems:{
        splendorTyre:{
            quantity:splendorTyre
        },
        tvsTyre:{
            quantity:tvsTyre
        },
        splendorPlusTyre:{
            quantity:splendorPlusTyre
        },
    },
    subTotal,tax,shippingCharges,total
} = useSelector((state) => state.cart);

 const {cartItems: orderItems} = useSelector((state) => state.cart);




const dispatch = useDispatch();

    const increment = (item)=>{
        switch(item){
            case 1:
              dispatch({type:"splendorTyreIncrement"});
              dispatch({type:"calculatePrice"});

            break;

            case 2:
                dispatch({type:"tvsTyreIncrement"});
                dispatch({type:"calculatePrice"});

              break;


              case 3:
                dispatch({type:"splendorPlusTyreIncrement"});
                dispatch({type:"calculatePrice"});

              break;
        
            default:dispatch({type:"splendorTyreIncrement"});
            dispatch({type:"calculatePrice"});

            break;
        }
    };


    const decrement = (item)=>{
        switch(item){
            case 1:
                if(splendorTyre === 0) break;
              dispatch({type:"splendorTyreDecrement"});
              dispatch({type:"calculatePrice"});

            break;

            case 2:
                if(tvsTyre === 0) break;

                dispatch({type:"tvsTyreDecrement"});
                dispatch({type:"calculatePrice"});

              break;


              case 3:
                if(splendorPlusTyre === 0) break;

                dispatch({type:"splendorPlusTyreDecrement"});
                dispatch({type:"calculatePrice"});

              break;
        
            default:
                if(splendorTyre === 0) break;
    
            dispatch({type:"splendorTyreIncrement"});
            dispatch({type:"calculatePrice"});

            break;
        }
    };


    useEffect(()=>{
        localStorage.setItem("cartItems",JSON.stringify(orderItems));
        localStorage.setItem("cartPrices",JSON.stringify(
          {    subTotal,tax,shippingCharges,total
          }  
        ));
    },[orderItems,subTotal,tax,shippingCharges,total
    ])

  return (
    <section className='cart'>
        <main>
            <CartItem title={"Splendor"} 
            img={splendor}
             value={splendorTyre}
             increment={()=>increment(1)}
             decrement={()=>decrement(1)}

             />

             <CartItem title={"tvs tyre"} 
            // img={}
             value={tvsTyre}
             increment={()=>increment(2)}
             decrement={()=>decrement(2)}

             />


            <CartItem title={"Splendor+ tyre"} 
            // img={}
             value={splendorPlusTyre}
             increment={()=>increment(3)}
             decrement={()=>decrement(3)}

             />


           

             
             <article>
                <div><h4>Sub Total</h4>
                <p>₹{subTotal}</p>
                </div>


                <div><h4>Tax</h4>
                <p>₹{tax}</p>
                </div>



                <div><h4>Shipping Charges</h4>
                <p>₹{shippingCharges}</p>
                </div>



                <div><h4>Total</h4>
                <p>₹{total}</p>
                </div>

                <Link to="/shipping">CheckOut</Link>



             </article>
        </main>
    </section>
  )
}

export default Cart
