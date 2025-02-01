import React from 'react';
import Logo from '../assets/Logo.png';
import Start from '../assets/start.png';
import { motion } from 'framer-motion';

const Page1 = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.div
      variants={pageVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <div className='homepage'>
        {/* <nav class='navbar'>
          <div class='container-fluid'>
            <a class='navbar-brand' href='#'>
              <img
                src={Logo}
                alt='Logo'
                class='d-inline-block align-text-top'
              />
            </a>
          </div>
        </nav> */}
        <div className='container'>
          <div className='row justify-content-center text-align'>
            <div className='col-md-10 text-center mt-custom'>
              {/* <h2 className=' text-white text-margin'>READY FOR THE MIDAS REVOLUTION?</h2> */}
              <a href='/#/Page2' className='start-btn'>
                <img src={Start} alt='start' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page1;
