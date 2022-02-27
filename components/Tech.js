import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const techs = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "React / Next.js" },
  { id: 3, name: "Tailwind CSS" },
  { id: 4, name: "REST API" },
  { id: 5, name: "GraphQL" },
  { id: 6, name: "Strapi" },
  { id: 7, name: "Postgresql" },
  { id: 8, name: "MongoDB" },
  { id: 9, name: "Framer-Motion" },
  { id: 10, name: "Recoil" },
  { id: 11, name: "Vue / Nuxt.js" },
  { id: 12, name: "Firebase" },
  { id: 13, name: "Cloudinary" },
];

function Tech() {
    const { ref, inView } = useInView({ threshold: 0.4 });
  const animation = useAnimation();
  const descAnimation = useAnimation();

    useEffect(() => {
      if (!inView) {
        animation.start({ y: 350, opacity: 0 });
      }
      if (inView) {
        animation.start({
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.5,
            type: "spring",
            duration: 1.5,
            bounce: 0.3,
          },
        });
      }
      if (!inView) {
        descAnimation.start({ x: "-100vw", opacity: 0 });
      }
      if (inView) {
        descAnimation.start({
          x: 0,
          opacity: 1,
          transition: {           
            type: "spring",
            duration: 1.5,
            bounce: 0.3,
          },
        });
      }
    }, [inView]);
  return (
    <div id='tech' ref={ref} className='px-8 py-20 bg-gray-100 text-amber-500'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-16 w-16'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
            />
          </svg>
        </div>
        <h1 className='pt-2 text-center font-bold tracking-widest text-4xl font-concert'>
          TECHNOLOGIES I USE
        </h1>
        <div className='mt-2 mx-auto w-24 h-1 bg-amber-500'></div>
        <motion.div
          animate={descAnimation}
          className='text-center pt-12 text-lg'>
          <p>Below are the current technologies I use for web development.</p>
        </motion.div>
        <motion.div className='pt-8 text-lg grid gap-8 grid-cols-2 sm:grid-cols-3'>
          {techs &&
            techs.map((tech) => (
              <motion.div
                animate={animation}
                key={tech.id}
                className='flex items-center justify-center space-x-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-3 w-3 rotate-90'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
                  />
                </svg>
                <p className='tracking-wider text-sm'>{tech.name}</p>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Tech;
