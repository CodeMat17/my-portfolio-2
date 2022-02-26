import { AnimatePresence, motion, useCycle } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const links = [
  { id: 1, name: "ABOUT ME", to: "#about" },
  { id: 2, name: "TECHNOLOGIES ", to: "#tech" },
  { id: 3, name: "FEATURED PROJECTS", to: "#projects" },
  { id: 4, name: "CONTACT ME", to: "#contact" },
];

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

function NavHeader() {
  const [open, cycleOpen] = useCycle(false, true);
 

  return (
    <nav className='sticky top-0 z-50 flex items-center justify-between px-4 py-2 bg-amber-500'>
      <div className='flex items-center space-x-2'>
        <Image
          src='/logo.webp'
          width={50}
          height={50}
          priority
          className='rounded-full'
        />
      </div>
      {/* Menu list */}
      <div className='relative'>
        {/* Start of mobile menu */}
        <div className='sm:hidden'>
          {/* Start enu button */}
          {!open && (
            <button onClick={cycleOpen}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='3'
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            </button>
          )}

          {/* End of Menu button */}
        </div>
        {/* End of mobile menu */}
        <div className='hidden sm:inline-flex space-x-6 font-semibold text-lg'>
          <Link href='#about'>
            <a className='whitespace-nowrap hover:text-amber-700'>ABOUT ME</a>
          </Link>
          <Link href='#tech'>
            <a className='hover:text-amber-700'>TECHNOLOGIES</a>
          </Link>
          <Link href='#projects'>
            <a className='hover:text-amber-700'>PROJECTS</a>
          </Link>
          <Link href='#contact'>
            <a className='whitespace-nowrap hover:text-amber-700'>CONTACT ME</a>
          </Link>
        </div>
      </div>
      {/* Start of menu tray */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{ width: 400 }}
            exit={{
              width: 0,
              transition: {
                delay: 0.5,
                duration: 0.3,
              },
            }}
            className='absolute left-0 top-0 px-4 py-4 bg-amber-500 opacity-95 rounded-br-full'>
            <div className='flex justify-end'>
              <button onClick={cycleOpen}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-red-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <motion.div
              variants={sideVariants}
              initial='closed'
              animate='open'
              exit='closed'
              className='pt-20 py-32 flex flex-col items-center justify-center space-y-8'>
              {links.map((link) => (
                <Link key={link.id} href={link.to}>
                  <motion.a
                    variants={itemVariants}
                    onClick={cycleOpen}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='font-bold text-2xl'>
                    {link.name}
                  </motion.a>
                </Link>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* End of menu tray */}
    </nav>
  );
}

export default NavHeader;
