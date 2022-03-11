import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    title: "Hulu Clone",
    desc: "Hulu is an online TV and movie streaming channel.",
    with: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "REST API" },
      { id: 3, name: "TailwindCSS" },
    ],
    projectLink: "https://hulu-clone-murex-delta.vercel.app/",
    githubLink: "https://github.com/Mctony17/hulu-clone",
  },
  {
    id: 2,
    title: "LinkedIn Clone",
    desc: "This is a responsive clone of the official LinkedIn application.",
    with: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "MongoDb" },
      { id: 4, name: "Recoil" },
      { id: 5, name: "NextAuth" },
    ],
    projectLink: "https://linkedin-clone-ruddy-chi.vercel.app/",
    githubLink: "https://github.com/Mctony17/linkedin-clone",
  },
  {
    id: 3,
    title: "BUY-HERE: E-Commerce Website",
    desc: "BUY-HER is an e-commerce website with inbuilt online payment.",
    with: [
      { id: 1, name: "Nuxt.js" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Strapi" },
      { id: 5, name: "Postgresql" },
    ],
    projectLink: "https://buyhere.netlify.app",
    githubLink: "https://github.com/Mctony17/buyhere-fe",
  },
  {
    id: 4,
    title: "Instagram Clone",
    desc: "A responsive instagram clone app with basic features like add photo, like photo and add comments.",
    with: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "Firebase" },
      { id: 4, name: "Next-Auth" },
    ],
    projectLink: "https://instagram-clone-topaz-five.vercel.app/",
    githubLink: "https://github.com/Mctony17/instagram-clone",
  },
];

function Projects() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();

  useEffect(() => {
    if (!inView) {
      animation.start({
        x: "-100vw",
        opacity: 0,
        transition: {
          staggerChildren: 0.2,
          staggerDirection: -1,
        },
      });
    }
    if (inView) {
      animation.start({
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
    <div
      id='projects'
      ref={ref}
      className='px-4 py-20 bg-gray-100 text-amber-500'>
      <div>
        <div className='flex items-center justify-center'>
          <div className='relative w-[200px] h-[200px]'>
            <Image
              src='/projects.svg'
              objectFit='cover'
              priority
              layout='fill'
            />
          </div>
        </div>

        <h1 className='pt-2 text-center font-bold tracking-widest text-4xl font-concert'>
          FEATURED PROJECTS
        </h1>
        <div className='mt-2 mx-auto w-24 h-1 bg-amber-500'></div>
        <motion.div
          animate={animation}
          className='pt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl mx-auto'>
          {projects &&
            projects.map((project) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={project.id}
                className='w-full h-auto p-4 bg-gray-700/75 shadow-xl shadow-gray-900 rounded-lg'>
                <div className='flex items-center justify-between'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 rotate-90'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z'
                    />
                  </svg>
                  <div className='flex items-center space-x-6'>
                    <Link href={project.githubLink}>
                      <a>
                        <div className="relative flex items-center justify-center">
                          <svg className='h-6 w-6' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z'
                          />
                        </svg>
                          <div className='absolute w-6 h-6 rounded-full bg-amber-50/25 animate-ping'></div>
                        </div>
                        
                      </a>
                    </Link>

                    <Link href={project.projectLink}>
                      <a>
                        <div className='relative flex items-center justify-center'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                            />
                          </svg>
                          <div className='absolute w-6 h-6 rounded-full bg-amber-50/25 animate-ping animation-delay-400'></div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className='pt-6'>
                  <h1 className='font-bold font-concert tracking-widest text-2xl'>
                    {project.title}
                  </h1>
                  <p className='pt-4 tracking-wider'>{project.desc}</p>
                  <p className='pt-6'>Built with:</p>
                  <div className='grid gap-x-4 grid-cols-3'>
                    {project.with.map((name) => (
                      <div key={name.id} className='flex items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-2 w-2 text-lime-500'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        <p className='whitespace-nowrap text-sm'>{name.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
