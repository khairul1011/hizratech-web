import React from 'react'
import '../../css/style.css';
import Lottie from 'lottie-react'
import lottieAnimation from '../../img/animation/BYWpCPj1Xw.json'
function Hero(props) {

  return <>

    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay={200}>
            <h1>{props.h1Text}</h1>
            <h2> {props.h2Text}</h2>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="#about" className="btn-get-started scrollto">Join Us</a>
              <a href="https://youtu.be/o6Biuy8Lr1c" className="glightbox btn-watch-video"><i className="bi bi-play-circle" /><span>Tonton Video</span></a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay={200}>
            <Lottie animationData={lottieAnimation} />
          </div>
        </div>
      </div>
    </section>
  </>


}

export default Hero