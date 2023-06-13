import React from 'react'
import '../../css/style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Sekolah1 = '/img/logo-sekolah/sman1batanggansalinhu-transformed.png'
const Sekolah2 = '/img/logo-sekolah/sman1kelayanginhu-transformed.png'
const Sekolah3 = '/img/logo-sekolah/sman1peranapinhu-transformed.png'
const Sekolah4 = '/img/logo-sekolah/sman1rengatbarat-transformed.png'
const Sekolah5 = '/img/logo-sekolah/sman1seberida-transformed.png'
const Sekolah6 = '/img/logo-sekolah/sman1siak-transformed.png'
const Sekolah8 = '/img/logo-sekolah/sman1tambang-transformed.png'
const Sekolah7 = '/img/logo-sekolah/sman1sungaimandau-transformed.png'
const Sekolah9 = '/img/logo-sekolah/sman2bungaraya-transformed.png'
const Sekolah10 = '/img/logo-sekolah/sman2rengatbarat-transformed.png'
const Sekolah11 = '/img/logo-sekolah/sman2tambang-transformed.png'
const Sekolah12 = '/img/logo-sekolah/sman2tapunghilir-transformed.png'
const Sekolah13 = '/img/logo-sekolah/sman2tualang-transformed.png'
const Sekolah14 = '/img/logo-sekolah/sman3tapung-transformed.png'
const Sekolah15 = '/img/logo-sekolah/sman3tualng-transformed.png'
const Sekolah16 = '/img/logo-sekolah/smkn1kotogasir-transformed.png'
const Sekolah17 = '/img/logo-sekolah/smantebingtinggi-transformed.png'



function Client() {

  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return <>

    <section id="clients" className="clients section-bg">
      <div className="section-title">
        <h2>Mitra Kami</h2>
      </div>
      <div className="container">
        <div className="row" data-aos="zoom-out">

          <Slider  {...settings} >
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Sekolah1} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Sekolah2} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Sekolah3} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Sekolah4} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Sekolah5} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Sekolah6} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Sekolah7} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Sekolah8} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Sekolah9} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Sekolah10} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Sekolah11} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Sekolah12} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Sekolah13} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Sekolah14} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Sekolah15} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Sekolah16} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Sekolah17} className="img-fluid" alt="" />
                    </div>
                    </Slider>
        </div>
      </div>
    </section>
  </>
}

export default Client