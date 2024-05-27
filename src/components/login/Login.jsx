import React from 'react'
import {motion} from "framer-motion";
import {FcGoogle} from "react-icons/fc";
import { server } from '../../redux/store';


const loginHandler = ()=>{

  window.open(`${server}/googlelogin`,"_self");
}

const Login = () => {
  return (
    <section className="login">

        <motion.button
        initial={{
            y:"-100vh",
        }}
        animate={{
            y:0
        }}
        onClick={loginHandler}
        >
            Login with Google
            <FcGoogle/>
        </motion.button>    
    </section>
  )
}

export default Login
