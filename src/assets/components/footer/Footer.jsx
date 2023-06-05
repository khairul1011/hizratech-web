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
                                <li><i className="bx bx-chevron-right" /> <a href="/about">About us</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="/portofolio">Portofolio</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="/kontak">Kontak</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Servis Kami</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Sosial Media</h4>
                            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                            <div className="social-links mt-3">
                                {/* <a href="#" className="twitter"><i className="bx bxl-twitter" /></a> */}
                                <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                                <a href="https://www.instagram.com/hizratech_konsultan/" className="instagram"><i className="bx bxl-instagram" /></a>
                                <a href="#" className="instagram"><i className="bx bxl-tiktok" /></a>
                                <a href="https://youtube.com/@hizraofficial" className="instagram"><i className="bx bxl-youtube" /></a>
                                {/* <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                                <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a> */}
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
                    {/* All the links in the footer should remain intact. */}
                    {/* You can delete the links only if you purchased the pro version. */}
                    {/* Licensing information: https://bootstrapmade.com/license/ */}
                    {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ */}
                    Designed by <a href="https://hizratech.com/">Tim Prduksi Hizratech.</a>
                </div>
            </div>
        </footer>
    </>
}

export default Footer