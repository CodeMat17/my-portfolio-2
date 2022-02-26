import React, { useEffect, useState } from 'react';

function ScrollUp() {
 const [isVisible, setIsVisible] = useState();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, behavior: "smooth"
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div onClick={scrollToTop} className='fixed bottom-0 z-40 mb-24 flex bg-amber-600 p-4 mx-4 border-t rounded-full shadow-xl shadow-gray-700'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-white animate-bounce'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 11l7-7 7 7M5 19l7-7 7 7'
            />
          </svg>
        </div>
      )}
    </>
  );
}

export default ScrollUp;
