import React from 'react'
import {motion} from "framer-motion";
import me from "../../assets/me.jpg"


const Founder = () => {

  const options = {
    initial:{
      x:"-100%",
      opacity:0
    },
    whileInView:{
      x:0,
      opacity:1,
    },
  };


  return (
    <section className='founder'>
      <motion.div {...options}>
        <img src={me} alt='Founder' height={200} width={200}/>
        <h3>Manish Kumar</h3>
        <p>Hey, EveryOne I am Manish Kumar Co-FOunder , Mech-Hack<br/>
        Our aim is to deliever genuine spare parts of motorbikes.

        </p>
      </motion.div>

    </section>
  )
}

export default Founder
