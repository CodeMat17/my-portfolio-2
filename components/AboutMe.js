import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function AboutMe() {
  const { ref, inView } = useInView({threshold: 0.3});
  const animation = useAnimation();

  useEffect(() => {
    if (!inView) {
      animation.start({ x: "-100vw", opacity: 0 });
    }
    if (inView) {
      animation.start({
        x: 0, opacity: 1,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.3,
        },
      });
    }
  }, [inView]);

  return (
    <div id='about' className='px-8 py-20 bg-gray-100 text-amber-500'>
      <div className='max-w-xl mx-auto'>
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
              d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
            />
          </svg>
        </div>

        <h1 className='pt-2 text-center font-bold tracking-widest text-4xl font-concert'>
          ABOUT ME
        </h1>
        <div className='mt-2 mx-auto w-24 h-1 bg-amber-500'></div>
        <div ref={ref} className='pt-12'>
          <motion.div animate={animation}>
            <div className='text-center text-lg'>
              <p>It gives me joy creating things that live on the internet.</p>
            </div>
            <div className='text-center pt-6 text-lg'>
              <p>
                I believe in continuous learning to restack my skills and
                unlearn the old ways of doing things.
              </p>
            </div>
            <div className='text-center pt-6 text-lg'>
              <p>
                I love giving back to the tech ecosystem by mentoring the
                younger developers. I have mentored and facilitated meetups
                across Africa (physically and remotely) for Google Africa via
                Andela Learning Community, ALC, for 3 seasons
              </p>
            </div>
            <div className='text-center pt-6 text-lg'>
              <p>
                I am also a member of{" "}
                <span className='font-semibold text-amber-600'>
                  Policy, Strategy and Leadership Course
                </span>
                , class 20, of the prestigious institution, National Institute
                For Policy and Strategic Studies, NIPSS, Kuru, Jos, Nigeria.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
