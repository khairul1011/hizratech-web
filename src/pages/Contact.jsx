import Contact from '../assets/components/main/Contact';
import '../assets/css/style.css'
import React from 'react';

function ContactPage(props) {
    return (
        <>
            <div>
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li><a href="/">Home</a></li>
                            <li>{props.halaman}</li>
                        </ol>
                        <h2>Halaman {props.halaman}</h2>
                    </div>
                </section>  
            </div>
            <Contact />
           
        </>
    )
}

export default ContactPage