import Head from 'next/head'
import Image from 'next/image'
import AboutMe from '../components/AboutMe'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import HeroPage from '../components/HeroPage'
import NavHeader from '../components/NavHeader'
import Projects from '../components/Projects'
import ScrollUp from '../components/ScrollUp'
import Tech from '../components/Tech'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Matthew | Developer</title>
        <meta name="description" content="Matthew is a software developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavHeader />
      <HeroPage />
      <AboutMe />
      <Tech />
      <Projects />
      <ContactForm />
      <Footer />
      <div className='flex justify-end '>
         <ScrollUp />
      </div>
     
    </div>
  )
}
