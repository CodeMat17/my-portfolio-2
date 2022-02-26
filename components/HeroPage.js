import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function HeroPage() {
  return (
    <div className='py-20 bg-gradient-to-t from-amber-600 via-amber-400 to-amber-200'>
      <div className='md:flex md:items-center md:justify-center lg:space-x-8'>
        <div className='text-center px-8 md:text-left'>
          <motion.h2
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              // delay: 0.1,
              type: "spring",
              duration: 1.3,
              bounce: 0.3,
            }}
            className='text-4xl md:text-5xl tracking-wider font-semibold font-sacramento'>
            I Am Matthew
          </motion.h2>
          <motion.h1
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0 , opacity: 1 }}
            transition={{
              // delay: 0.1,
              type: "spring",
              duration: 1.3,
              bounce: 0.3,
            }}
            className='pt-6 text-4xl lg:text-5xl font-bold tracking-wider sm:max-w-sm md:max-w-lg mx-auto md:mx-0'>
            A Full Stack Software Developer.
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{ type: "spring", duration: 2, bounce: 0.3 }}
          whileHover={{ scale: 1.1 }}
          className='pt-12 md:pt-0'>
          <div className='relative mx-auto w-[300px] h-[300px] overflow-hidden rounded-full shadow-xl shadow-gray-900'>
            <Image
              src='/my_pix.webp'
              alt="Hero img"
              layout='fill'
              objectFit='cover'
              priority
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, type: "spring", duration: 1.2, bounce: 0.3 }}
        className='px-8 pt-8 md:pt-0 text-center md:text-left text-lg tracking-wide md:max-w-4xl md:mx-auto'>
        <p className='pb-12 md:pb-6 text-black max-w-sm mx-auto md:mx-0'>
          I build beautiful, fast, intuitive, reliable, responsive and dynamic
          software solutions with REACT.js
        </p>
        <a
          href='#contact'
          className='bg-amber-400 px-8 py-5 tracking-wider font-semibold text-amber-700 rounded-lg shadow-xl shadow-gray-700'>
          LET&apos;S TALK BIZ
        </a>
      </motion.div>
    </div>
  );
}

export default HeroPage;
