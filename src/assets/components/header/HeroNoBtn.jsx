import React from 'react'
import '../../css/style.css';
import Waves from './Waves';


function HeroNoBtn(props) {

  return <>
    <section id='hero' className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay={200}>
            <h1>{props.h1Text}</h1>
            <h2> {props.h2Text}</h2>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay={200}>
            <img src={props.img} className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>
    </section>
    < Waves />
  </>
}

export default HeroNoBtn