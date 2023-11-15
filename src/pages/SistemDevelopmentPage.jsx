import React from 'react';
import '../assets/css/sistemDevelopment.css';
import HeroNoBtn from '../assets/components/header/HeroNoBtn';
import Cta from '../assets/components/main/Cta';
const sistem = '/img/sistemdevelopmentimg.png'


function SistemDevelopmentPage() {
    return (
        <>
            < HeroNoBtn
                h1Text="Sistem Development"
                h2Text="Kami membantu anda Menyajikan Inovasi Tepat dan Memenuhi Kebutuhan Anda dalam bentuk sistem."
                img={sistem}
            />

            <section id="more-services" className="more-services">
                <div className="section-title" >
                    <h2>Software Kami </h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="card" style={{ backgroundImage: 'url("/img/sistem-development/pustaka.webp")' }} data-aos="fade-up" data-aos-delay={100}>
                                <div className="card-body">
                                    <h5 className="card-title"><a href>Digital Pustaka</a></h5>
                                    <p className="card-text">Web digital pustaka adalah sebuah platform daring yang menyediakan akses mudah dan luas terhadap berbagai koleksi dan sumber daya informasi digital.</p>
                                    <div className="read-more"><a href="/sistemdevelopment/pustaka"><i className="bi bi-arrow-right" /> Read More</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="card" style={{ backgroundImage: 'url("/img/sistem-development/kasir.svg")' }} data-aos="fade-up" data-aos-delay={200}>
                                <div className="card-body">
                                    <h5 className="card-title"><a href>Hizra Kasir</a></h5>
                                    <p className="card-text">Hizra Kasir adalah sebuah aplikasi yang dirancang untuk membantu pengelolaan kasir dan transaksi di berbagai jenis bisnis. </p>
                                    <div className="read-more"><a href="/sistemdevelopment/kasir"><i className="bi bi-arrow-right" /> Read More</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-stretch mt-4">
                            <div className="card" style={{ backgroundImage: 'url("/img/sistem-development/more-services-3.jpg")' }} data-aos="fade-up" data-aos-delay={100}>
                                <div className="card-body">
                                    <h5 className="card-title"><a href>Smater</a></h5>
                                    <p className="card-text">
                                        Apikasi Smater adalah sebuah aplikasi sistem manajemen sekolah yang dirancang untuk membantu pengelolaan dan administrasi sekolah secara efisien.</p>
                                    <div className="read-more"><a href="/sistemdevelopment/smater"><i className="bi bi-arrow-right" /> Read More</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-stretch mt-4">
                            <div className="card" style={{ backgroundImage: 'url("/img/sistem-development/website.webp")' }} data-aos="fade-up" data-aos-delay={200}>
                                <div className="card-body">
                                    <h5 className="card-title"><a href>Hizra Website</a></h5>
                                    <p className="card-text">Hizra Website adalah sebuah platform yang menyediakan solusi lengkap untuk pembuatan dan pengelolaan website yang profesional dan responsif.</p>
                                    <div className="read-more"><a href="/sistemdevelopment/website"><i className="bi bi-arrow-right" /> Read More</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            < Cta />
        </>
    )
}

export default SistemDevelopmentPage