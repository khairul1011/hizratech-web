import React from 'react'
import '../../css/style.css';
import Lottie from 'lottie-react'
import lottieAnimationNotFound from '../../img/animation/tt0h42Rmct.json'

function HeroNotFound() {
    return (
        <>
            <section id="hero-animated" className="hero-animated d-flex align-items-center">
                <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
                    <Lottie className="img-fluid animated" animationData={lottieAnimationNotFound} />
                    <h2>Page <span>Not Found</span></h2>
                    <p>Halaman ini tidak ditemukan. Terima kasih atas kesabaran dan antusiasme Anda.</p>
                    <div className="d-flex">
                        <a href="/" className="btn-get-started scrollto">Halaman Utama</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroNotFound