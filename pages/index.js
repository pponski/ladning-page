import Head from 'next/head'
// COMPONENTS
import DesktopSidebar from '../components/nav/DesktopSidebar'
import Header from '../components/Header'
import MobileSidebar from '../components/nav/MobileSidebar'
import Pricing from '../components/sections/Pricing'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Testimonials from '../components/sections/Testimonials'
import Contact from '../components/sections/Contact'
import Newsletter from '../components/sections/Newsletter'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <MobileSidebar/>
        <DesktopSidebar/>
        <Header/>
        <About/>
        <Testimonials/>
        <Projects/>
        <Pricing/>
        <Contact/>
        <Newsletter/>
        <Footer/>
      </main>
      
    </div>
  )
}





