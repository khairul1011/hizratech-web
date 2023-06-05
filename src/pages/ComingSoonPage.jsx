import '../assets/css/style.css'
import React from 'react';
import Header from '../assets/components/header/Header'
import HeroComingSoon from '../assets/components/header/HeroComingSoon';

function ComingSoonPage(props) {
    return (
        <>
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="container">
                    <ol>
                        <li><a href="/">Home</a></li>
                        <li>Halaman {props.halaman}</li>
                    </ol>
                    <h2>Halaman {props.halaman}</h2>
                </div>
            </section>
            <Header />
            <HeroComingSoon />
        </>
    )
}

export default ComingSoonPage