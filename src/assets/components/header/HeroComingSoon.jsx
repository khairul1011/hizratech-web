import React from 'react'
import '../../css/style.css';
import Lottie from 'lottie-react'
import lottieAnimationComming from '../../img/animation/seTHXlWJJA.json'

function HeroComingSoon() {
    return (
        <>
            <section id="hero-animated" className="hero-animated d-flex align-items-center">
                <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
                    <Lottie className="img-fluid animated" animationData={lottieAnimationComming} />
                    <h2>Comming <span>Soon</span></h2>
                    <p>Halaman ini sedang dipersiapkan untuk pengalaman dan layanan yang menarik. Konten yang informatif dan inspiratif akan segera hadir. Terima kasih atas kesabaran dan antusiasme Anda.</p>
                    <div className="d-flex">
                        <a href="/" className="btn-get-started scrollto">Halaman Utama</a>
                        <a href="https://youtu.be/o6Biuy8Lr1c" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle" /><span>Watch Video</span></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroComingSoon