import React from 'react'
import '../../css/style.css';

function AboutUs(props) {
    const { isButtonEnabled } = props;
    return <>
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Tentang Kami</h2>
                </div>
                <div className="row content">
                    <div className="col-lg-6">
                        <h2>Kenapa Hizratech?</h2>
                        <ul>
                            <li><i className="ri-check-double-line"></i> Kualitas Terbaik</li>
                            <li><i className="ri-check-double-line"></i> Klien Terpercaya</li>
                            <li><i className="ri-check-double-line"></i> Layanan Bervariasi</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <p>
                            Hizratech adalah perusahaan yang bergerak dalam development system yang akan mewujudkan sistem digital anda. Hizratech juga menyediakan berbagai jasa layanan publik yang siap membantu klien yang berkaitan dengan teknologi.
                        </p>
                        {isButtonEnabled && (
                            <a href="/about" className="btn-learn-more">Tampilkan Lebih</a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default AboutUs