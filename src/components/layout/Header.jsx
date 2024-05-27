import React from 'react'
import {IoSettings} from "react-icons/io5";
import { Link } from 'react-router-dom';
import {FiShoppingCart,FiLogIn} from "react-icons/fi";
import {FaUser} from "react-icons/fa";
import {motion} from "framer-motion";

const Header = ({isAuthenticated = false}) => {
  return (
    <nav>
      
      <motion.div 
      initial = {{x:"-100%"}}
      whileInView={{x:0}}
      >
        {/* <FaGears/> */}
        <IoSettings/>
      </motion.div>

      <div>

        <Link to="/">Home</Link>
        <Link to="/contact">Mechanics</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <FiShoppingCart/>
          </Link>

        <Link to={isAuthenticated ? "/me" : "/login"}>

            {isAuthenticated ? <FaUser/> : <FiLogIn/>}

        </Link>


      </div>
    </nav>
  )
}

export default Header
