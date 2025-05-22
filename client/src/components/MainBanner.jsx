import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const MainBanner = () => {
  return (
    <div className='relative'>
      {/* Large screen image */}
      <img src={assets.main_banner_bg} alt="banner" className='w-full hidden md:block' />

      {/* Small screen image */}
      <img src={assets.main_banner_bg_sm} alt="banner" className='w-full block md:hidden' />

      <motion.div
        className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h1
          className='text-3xl md:text-4xl lg-text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'
          variants={itemVariants}
        >
          Freshness You Can Trust, Saving You Will Love!
        </motion.h1>

        <motion.div className='flex items-center mt-6 font-medium' variants={itemVariants}>
          <Link
            to={"/products"}
            className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'
          >
            Shop now
            <img className='md:hidden transition group-focus:translate-x-1' src={assets.white_arrow_icon} alt="arrow" />
          </Link>

          <Link
            to={"/products"}
            className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'
          >
            Explore deals
            <img className='transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt="arrow" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainBanner;
