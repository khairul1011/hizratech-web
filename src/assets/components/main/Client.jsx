import React from 'react'
import '../../css/style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sekolah1 from '../../../assets/img/logo-sekolah/sman1batanggansalinhu-transformed.png'
import Sekolah2 from '../../../assets/img/logo-sekolah/sman1kelayanginhu-transformed.png'
import Sekolah3 from '../../../assets/img/logo-sekolah/sman1peranapinhu-transformed.png'
import Sekolah4 from '../../../assets/img/logo-sekolah/sman1rengatbarat-transformed.png'
import Sekolah5 from '../../../assets/img/logo-sekolah/sman1seberida-transformed.png'
import Sekolah6 from '../../../assets/img/logo-sekolah/sman1siak-transformed.png'
import Sekolah8 from '../../../assets/img/logo-sekolah/sman1tambang-transformed.png'
import Sekolah7 from '../../../assets/img/logo-sekolah/sman1sungaimandau-transformed.png'
import Sekolah9 from '../../../assets/img/logo-sekolah/sman2bungaraya-transformed.png'
import Sekolah10 from '../../../assets/img/logo-sekolah/sman2rengatbarat-transformed.png'
import Sekolah11 from '../../../assets/img/logo-sekolah/sman2tambang-transformed.png'
import Sekolah12 from '../../../assets/img/logo-sekolah/sman2tapunghilir-transformed.png'
import Sekolah13 from '../../../assets/img/logo-sekolah/sman2tualang-transformed.png'
import Sekolah14 from '../../../assets/img/logo-sekolah/sman3tapung-transformed.png'
import Sekolah15 from '../../../assets/img/logo-sekolah/sman3tualng-transformed.png'
import Sekolah16 from '../../../assets/img/logo-sekolah/smkn1kotogasir-transformed.png'
import Sekolah17 from '../../../assets/img/logo-sekolah/smantebingtinggi-transformed.png'



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