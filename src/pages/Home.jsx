import React from 'react'
import Head from '../Home/Head'
// import Glowingball from '../Home/Glowingball'
import { motion } from "framer-motion";

const Home = () => {
  // const pageVariants = {
  //   initial: { x: "100vw", opacity: 0 },
  //   animate: { x: 0, opacity: 1, transition: { duration: 0.3 } }, 
  //   exit: { x: "-100vw", opacity: 0, transition: { duration: 0.3 } } 
  // };
  return (
  <>
    {/* <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    > */}
  {/* <Glowingball /> */}
  <Head/>
  {/* </motion.div> */}
  </>
  )
}

export default Home