import AboutUs from '../assets/components/main/AboutUs';
import AboutUsVisiMisi from '../assets/components/main/AboutUsVisiMisi';
import Client from '../assets/components/main/Client';
import '../assets/css/style.css'
import React from 'react';

function AboutPage(props) {
    return (
        <>
        <div>
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li><a href="/">Home</a></li>
                            <li>Halaman {props.halaman}</li>
                        </ol>
                        <h2>Halaman {props.halaman}</h2>
                    </div>
                </section>  
            </div>
        <AboutUs />
        <AboutUsVisiMisi />
        <Client />
        </>
    )
}

export default AboutPage