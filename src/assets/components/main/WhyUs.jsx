import React from 'react'
import '../../css/style.css';
import Lottie from 'lottie-react'
import sceneAnimation from '../../img/animation/O9JVHiMudH.json'


function WhyUs() {
    return <>
        <section id="why-us" className="why-us d-flex align-items-center">
            <div className="container-fluid" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                        <div className="content">
                            <h3>Inovasi Terkini dalam Sistem dan Aplikasi untuk  <strong>Masa Depan Anda!</strong></h3>
                            <p>
                            Kami menyediakan berbagai jasa layanan publik yang siap membantu klien yang berkaitan dengan diantaranya :
                            </p>
                        </div>
                        <div className="accordion-list">
                            <ul>
                                <li>
                                    <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> System Development  <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                                        <p>
                                            Hizratech bersedia untuk merancang, menguji dan mengimplementasikan aplikasi perangkat lunak baru atau program sesuai dengan kebutuhan klien.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> Layanan Publik <i className="bx bx-chevron-up icon-close" /> <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                                        <p>
                                            Hizratech siap untuk melayani klien dalam rangka pemenuhan kebutuhan pelayanan baik di bidang jasa, layanan maupun administratif.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Jual Beli Perangkat Lunak dan Keras <i className="bx bx-chevron-up icon-close" /> <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                                        <p>
                                            Hizratech juga menjual berbagai jenis barang perangkat lunak dan keras.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" data-aos="zoom-in" data-aos-delay={150}><Lottie animationData={sceneAnimation} /></div>

                </div>
            </div>
        </section>
    </>
}

export default WhyUs