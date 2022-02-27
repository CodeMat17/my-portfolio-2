import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
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
        <div className='flex items-center justify-center'>
          <div className='relative w-[250px] h-[250px]'>
            <Image src='/aboutme.svg' objectFit='cover' priority layout='fill' />
          </div>
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
                Andela Learning Community, ALC, for 3 seasons.
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
            <div className='text-center pt-6 text-lg'>
              <p>I am a B.Tech holder (Physics Electronics).</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
