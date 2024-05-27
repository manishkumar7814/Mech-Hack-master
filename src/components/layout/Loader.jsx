import React from "react";
import { IoFastFoodOutline , IoSettingsOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Loader = () => {
  const options = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      ease: "linear",
    //   repeat: "fifty",
      repeatType: "reverse",
    },
  };
  return (
    <div className="loader">
      {/* <IoFastFoodOutline /> */}
      <IoSettingsOutline/>
      <div>
        {/* <motion.p {...options}>Loading...</motion.p> */}
        <motion.p {...options}>Loading...</motion.p>
      </div>
    </div>
  );
};

export default Loader;