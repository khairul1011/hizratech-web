import React from 'react'
import '../../css/style.css';


function Contact() {
    return <>
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Kontak Kami</h2>
                    <p>Hubungi kami untuk mendapatkan informasi seputar produk dari Hizratech</p>
                </div>
                <div className="row">
                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt" />
                                <h4>Alamat:</h4>
                                <p>Jl. Rambutan no.20D, Sidomulyo Timur, Pekanbaru</p>
                            </div>
                            <div className="email">
                                <i className="bi bi-envelope" />
                                <h4>Email:</h4>
                                <p>hizratechkonsultanservices@gmail.com</p>
                            </div>
                            <div className="phone">
                                <i className="bi bi-phone" />
                                <h4>Whatsapp:</h4>
                                <p>+62 822-8502-1244  |  +62 822-8304-8013</p>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1919.483712316554!2d101.42684726793584!3d0.47295967348645296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a9c1a514ca09%3A0x34397a4cb24839e8!2sPT%20Hizra%20Teknologi%20Konsultan%20Services!5e0!3m2!1sen!2sid!4v1685932191380!5m2!1sen!2sid" frameBorder={0} style={{ border: 0, width: '100%', height: '290px' }} allowFullScreen />
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Nama</label>
                                    <input type="text" name="name" className="form-control" id="name" required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="name"> Email</label>
                                    <input type="email" className="form-control" name="email" id="email" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Pesan</label>
                                <textarea className="form-control" name="message" rows={10} required defaultValue={""} />
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Kirim Pesan</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Contact