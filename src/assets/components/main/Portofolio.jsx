import React from 'react'
import '../../css/style.css';

import portofolio1 from '../../../assets/img/portfolio/portfolio-1.jpg'
import portofolio2 from '../../../assets/img/portfolio/portfolio-2.jpg'
import portofolio3 from '../../../assets/img/portfolio/portfolio-3.jpg'
import portofolio4 from '../../../assets/img/portfolio/portfolio-4.jpg'
import portofolio5 from '../../../assets/img/portfolio/portfolio-5.jpg'
import portofolio6 from '../../../assets/img/portfolio/portfolio-6.jpg'
import portofolio7 from '../../../assets/img/portfolio/portfolio-7.jpg'
import portofolio8 from '../../../assets/img/portfolio/portfolio-8.jpg'
import portofolio9 from '../../../assets/img/portfolio/portfolio-9.jpg'

function Portofolio() {
    return <>
        <section id="portfolio" className="portfolio">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay={100}>
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-card">Card</li>
                    <li data-filter=".filter-web">Web</li>
                </ul>
                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-img"><img src={portofolio1} className="img-fluid" alt="" /></div>
                        <div className="portfolio-info">
                            <h4>App 1</h4>
                            <p>App</p>
                            <a href={portofolio1} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus" /></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-img"><img src={portofolio2}className="img-fluid" alt="" /></div>
                        <div className="portfolio-info">
                            <h4>Web 3</h4>
                            <p>Web</p>
                            <a href={portofolio2} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus" /></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-img"><img src={portofolio3} className="img-fluid" alt="" /></div>
                        <div className="portfolio-info">
                            <h4>App 2</h4>
                            <p>App</p>
                            <a href={portofolio3} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus" /></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-img"><img src={portofolio4} className="img-fluid" alt="" /></div>
                        <div className="portfolio-info">
                            <h4>Card 2</h4>
                            <p>Card</p>
                            <a href={portofolio4} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus" /></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-img"><img src={portofolio5} className="img-fluid" alt="" /></div>
                        <div className="portfolio-info">
                            <h4>Web 2</h4>
                            <p>Web</p>
                            <a href={portofolio5} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus" /></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-img"><img src={portofolio6} className="img-fluid" alt="" /></div>
                        <div className="portfolio-info">
                            <h4>App 3</h4>
                            <p>App</p>
                            <a href={portofolio6} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus" /></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-img"><img src={portofolio7} className="img-fluid" alt="" /></div>
                        <div className="portfolio-info">
                            <h4>Card 1</h4>
                            <p>Card</p>
                            <a href={portofolio7} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus" /></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-img"><img src={portofolio8} className="img-fluid" alt="" /></div>
                        <div className="portfolio-info">
                            <h4>Card 3</h4>
                            <p>Card</p>
                            <a href={portofolio8} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus" /></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-img"><img src={portofolio9} className="img-fluid" alt="" /></div>
                        <div className="portfolio-info">
                            <h4>Web 3</h4>
                            <p>Web</p>
                            <a href={portofolio9} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus" /></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Portofolio