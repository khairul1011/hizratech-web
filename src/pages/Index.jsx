import '../assets/css/style.css'
import React from 'react';
import Hero from '../assets/components/header/Hero'
import Client from '../assets/components/main/Client'
import AboutUs from '../assets/components/main/AboutUs'
import WhyUs from '../assets/components/main/WhyUs'
import Skils from '../assets/components/main/Skils'
import Cta from '../assets/components/main/Cta'
// import Portofolio from '../assets/components/main/Portofolio'
import Faq from '../assets/components/main/Faq'
  

function Index() {
    return (
        <>
        <Hero h2Text="Grow With Us " h1Text="Inspiring Minds, Shaping Futures" />
        <main id="main">
          <AboutUs />
          <WhyUs />
          <Client />
          <Skils />
          <Cta />
          {/* <Portofolio /> */}
          <Faq />
        </main>
      </>
    )
 

}

export default Index