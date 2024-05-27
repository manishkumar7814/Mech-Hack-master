import React from 'react'
import {motion} from "framer-motion";
const ExploreCard = ({ itemNum, partSrc, price, title, handler, delay = 0 }) => {
  return (
    
    <motion.div 
    className='exploreCard' 
    
    initial={{
        x: "-100%",
        opacity:0,
    }}
    whileInView={{
        x:0,
        opacity:1,
    }}
    transition={{
        delay,
    }}
    >

        <div>
            Item {itemNum}
        </div>

        <main>
            <img src={partSrc} alt={itemNum}/>
            <h5>₹{price}</h5>
            <p>{title}</p>
            <button onClick={() => handler(itemNum)}>Buy Now</button>
            

        </main>
    </motion.div>
    
  )
}

export default ExploreCard
