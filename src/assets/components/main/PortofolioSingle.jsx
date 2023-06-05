import '../../../assets/css/style.css'
import React from 'react';
import portofolioFoto1 from '../../../assets/img/portfolio/portfolio-1.jpg'
import portofolioFoto2 from '../../../assets/img/portfolio/portfolio-2.jpg'
import portofolioFoto3 from '../../../assets/img/portfolio/portfolio-3.jpg'

function PortofolioSingle() {
    return (
        <>
         <section id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide">
                      <img src={portofolioFoto1} alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src={portofolioFoto2} alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src={portofolioFoto3} alt="" />
                    </div>
                  </div>
                  <div className="swiper-pagination" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Project information</h3>
                  <ul>
                    <li><strong>Category</strong>: Web design</li>
                    <li><strong>Client</strong>: ASU Company</li>
                    <li><strong>Project date</strong>: 01 March, 2020</li>
                    <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>This is an example of portfolio detail</h2>
                  <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default PortofolioSingle