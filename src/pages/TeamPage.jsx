import Team from '../assets/components/main/Team';
import '../assets/css/style.css'
import React from 'react';

function TeamPage(props) {
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
        <Team />
        </>
    )
    
}

export default TeamPage