import React from 'react'
import ExploreCard from './ExploreCard'
import splendor from "../../assets/rear_splendor-tyre.jpeg";
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const Menu = () => {

  const dispatch = useDispatch()

  const addToCartHandler=(itemNum) => {
    switch(itemNum) {
      case 1:
        dispatch({type:"splendorTyreIncrement"});
        dispatch({type:"calculatePrice"});
        toast.success("Added to Cart");
        break;


        case 2:
        dispatch({type:"tvsTyreIncrement"});
        dispatch({type:"calculatePrice"});
        toast.success("Added to Cart");
        break;

        case 3:
        dispatch({type:"splendorPlusTyreIncrement"});
        dispatch({type:"calculatePrice"});
        toast.success("Added to Cart");
        break;


        

        default:
        dispatch({type:"splendorTyreIncrement"});
        toast.success("Added to Cart");
          break;
    }
  };
  return (
  
  <section id="menu">

    <h1>Explore Here</h1>

      <div>
        <ExploreCard 
        itemNum={1} 
        partSrc={splendor} 
        price={2000} 
        title="Splendor Tyre"
        handler={addToCartHandler}
        delay={0.1}
        />


       <ExploreCard 
        itemNum={2} 
        partSrc={splendor} 
        price={2000} 
        title="tvs Tyre"
        handler={addToCartHandler}
        delay={0.4}
        />

 
        <ExploreCard 
        itemNum={3} 
        partSrc={splendor} 
        price={2000} 
        title="Splendor+ Tyre"
        handler={addToCartHandler}
        delay={0.8}/>
        

       

      </div>

  </section>
  
  )
}

export default Menu
