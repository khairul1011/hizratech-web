import React from 'react'
import '../../css/style.css';


function Footer() {
    return <>
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>Hizratech</h3>
                            <p>
                            Jl. Rambutan no.20D,  <br />
                            Sidomulyo Timur,<br />
                            Pekanbaru<br /><br />
                                <strong>Whats App:</strong><br /> +62 822-8502-1244<br /> +62 822-8304-8013 <br />
                                <strong>Email:</strong> hizratechkonsultanservices@gmail.com<br />
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4> Link</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right" /> <a href="/">Home</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="/about">About </a></li>
                                {/* <li><i className="bx bx-chevron-right" /> <a href="/team">Team</a></li> */}
                                <li><i className="bx bx-chevron-right" /> <a href="/blog">Artikel</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="/contact">Kontak</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Layanan Kami</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right" /> <a href="/sistemdevelopment">System Development</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="/jualbeli">Jual Beli Perangkat Lunak Dan Keras</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="/layananpublik">Layanan Publik</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Sosial Media</h4>
                            <p>Berita terkini dan informasi menarik di media sosial kami.</p>
                            <div className="social-links mt-3">
                                <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                                <a href="https://www.instagram.com/hizratech_konsultan/" className="instagram"><i className="bx bxl-instagram" /></a>
                                <a href="#" className="instagram"><i className="bx bxl-tiktok" /></a>
                                <a href="https://youtube.com/@hizraofficial" className="instagram"><i className="bx bxl-youtube" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container footer-bottom clearfix">
                <div className="copyright">
                    © Copyright <strong><span>Hizratech</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://hizratech.com/">Tim Prduksi Hizratech.</a>
                </div>
            </div>
        </footer>
    </>
}

export default Footer