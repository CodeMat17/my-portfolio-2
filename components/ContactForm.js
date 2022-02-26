import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

function ContactForm() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formTel, setFormTel] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        "service_iqzbe0u",
        "template_zu8fv7l",
        form.current,
        "user_SBpDUf8mKxKqBIVjZ1rPy"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSending(false);
          setFormName("");
          setFormEmail("");
          setFormTel("");
          setFormMessage("");
        },
        (error) => {
          console.log(error.text);
          setSending(false);
        }
      );
  };

  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();

  useEffect(() => {
    if (!inView) {
      animation.start({ x: "-100vw", opacity: 0 });
    }
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          delay: 0.5,
          type: "spring",
          duration: 1.5,
          bounce: 0.3,
        },
      });
    }
  }, [inView]);
  return (
    <div
      id='contact'
      ref={ref}
      className='px-8 py-20 bg-gray-100 text-amber-500'>
      <div className='max-w-md mx-auto'>
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
              d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
            />
          </svg>
        </div>

        <h1 className='pt-2 text-center font-bold tracking-widest text-4xl font-concert'>
          CONTACT ME
        </h1>
        <div className='mt-2 mx-auto w-24 h-1 bg-amber-500'></div>
        <motion.div animate={animation} className='pt-8'>
          <form ref={form} onSubmit={sendEmail} className='space-y-6'>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Enter your fullname'
              required
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              className='border w-full p-3 rounded-lg shadow-lg shadow-gray-400 focus:outline-none focus:bg-amber-100 text-amber-600 tracking-wider'
            />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email address'
              required
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
              className='border w-full p-3 rounded-lg shadow-lg shadow-gray-400 focus:outline-none focus:bg-amber-100 text-amber-600 tracking-wider'
            />
            <input
              type='number'
              name='tel'
              id='tel'
              placeholder='Enter your mobile number'
              required
              value={formTel}
              onChange={(e) => setFormTel(e.target.value)}
              className='border w-full p-3 rounded-lg shadow-lg shadow-gray-400 focus:outline-none focus:bg-amber-100 text-amber-600 tracking-wider'
            />
            <textarea
              name='message'
              id='message'
              rows='4'
              placeholder='Enter your message'
              required
              value={formMessage}
              onChange={(e) => setFormMessage(e.target.value)}
              className='border w-full p-3 rounded-lg shadow-lg shadow-gray-400 focus:outline-none focus:bg-amber-100 text-amber-600 tracking-wider'
            />
            <div className='pt-6 flex items-center justify-between'>
              <button
                type='submit'
                className='bg-amber-200 px-6 py-2 font-semibold tracking-wider rounded-lg shadow-lg shadow-gray-500'>
                {sending ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-amber-600 animate-spin'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                    />
                  </svg>
                ) : (
                  " SEND EMAIL"
                )}
              </button>
              <p className='font-bold text-lg text-lime-600'>OR</p>
              <a
                href='tel:+2348063856120'
                className='bg-amber-200 px-6 py-2 font-semibold tracking-wider rounded-lg shadow-lg shadow-gray-500'>
                CALL ME
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactForm;
