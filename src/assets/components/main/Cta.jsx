import React from 'react'
import '../../css/style.css';


function Cta() {
    return <>
        <section id="cta" className="cta">
            <div className="container" data-aos="zoom-in">
                <div className="row">
                    <div className="col-lg-9 text-center text-lg-start">
                        <h3>Segera pesan produk anda dan segera hubungi kami</h3>
                        <p> Segera hubungi kami jika anda ingin berkonsultasi tentang kebutuhan anda, kami memastikan anda akan mengeluarkan biaya yang lebih efisien sesuai dengan kebutuhan sistem digital anda. </p>
                    </div>
                    <div className="col-lg-3 cta-btn-container text-center">
                        <a className="cta-btn align-middle" target="_blank" href="https://wa.me/6282389430165/?text=Saya+tertarik+untuk+produk:">Hubungi Kami</a>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Cta