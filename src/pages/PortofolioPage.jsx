import '../assets/css/style.css'
import React from 'react';
import PortofolioSingle from '../assets/components/main/PortofolioSingle';

function PortfolioPage() {
    return (
        <>
         <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <ol>
              <li><a href="/">Home</a></li>
              <li>Portfolio Details</li>
            </ol>
            <h2>Portfolio Details</h2>
          </div>
        </section>
       <PortofolioSingle />
      
        </>
    )
}

export default PortfolioPage