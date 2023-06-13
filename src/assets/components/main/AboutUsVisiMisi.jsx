import React from 'react'
import '../../css/style.css';
import '../../css/variables.css'
const aboutVisiMisiImg = '/img/visimisi.jpg'

function AboutUsVisiMisi() {
    return (
        <>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay={200}>
                        <div className="col-lg-5">
                            <div className="about-img">
                                <img src={aboutVisiMisiImg} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <h3 className="pt-0 pt-lg-5">Komitmen Kami Adalah Mewujudkan Pengembangan Digital Dalam Negeri Melalui Kolaborasi Yang Enovatif Dan Efektif. </h3>
                            {/* Tabs */}
                            <ul className="nav nav-pills mb-3">
                                <li><a className="nav-link active" data-bs-toggle="pill" href="#tab1">Visi</a></li>
                                <li><a className="nav-link" data-bs-toggle="pill" href="#tab2">Misi</a></li>
                            </ul>{/* End Tabs */}
                            {/* Tab Content */}
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="tab1">
                                    {/* <p className="fst-italic">Kami berkomitmen untuk mewujudkan pengembangan digital dalam negeri melalui kolaborasi kreatif, kompeten, sinergis, dan profesional. Visi kami adalah menghadirkan solusi teknologi terdepan yang memberikan dampak positif dan berkelanjutan bagi masyarakat.</p> */}
                                    <div className="d-flex align-items-center mt-4">

                                        <h4><i className="bi bi-check2" />Terwujudnya pengembangan digital dalam negeri yang dibangun dari kreatifitas bersama secara kompeten, sinergis, profesional,</h4>
                                    </div>
                                </div>{/* End Tab 1 Content */}
                                <div className="tab-pane fade show" id="tab2">
                                    <div className="d-flex align-items-center mt-4">
                                        <h4><i className="bi bi-check2" />Berkontribusi pada kemajuan teknologi di segala bidang. Seperti UMKM, Kesehatan, Pendidikan, Pertanian, dll.</h4>
                                    </div>
                                    <div className="d-flex align-items-center mt-4">
                                        <h4><i className="bi bi-check2" />Mendukung penuh partisipasi anak muda dalam merealisasikan pengembangan teknologi sesuai dengan perkembangan zaman.</h4>
                                    </div>
                                    <div className="d-flex align-items-center mt-4">
                                        <h4><i className="bi bi-check2" />Menjalin kerjasama yang sinergis dan berkelanjutan.</h4>
                                    </div>
                                    <div className="d-flex align-items-center mt-4">
                                        <h4><i className="bi bi-check2" />Memberikan edukasi pengembangan digital yang efektif sebagai pengabdian kepada masyarakat.</h4>
                                    </div>
                                    <div className="d-flex align-items-center mt-4">
                                        <h4><i className="bi bi-check2" />Memberikan jasa konsultasi dalam meningkatkan kreatifitas, efektivitas, efisiensi, serta produktivitas di bidang teknologi digital.</h4>
                                    </div>
                                    <div className="d-flex align-items-center mt-4">
                                        <h4><i className="bi bi-check2" />Memberikan jasa layanan terbaik dan berkualitas di dukung oleh SDM yang berkompeten di bidangnya.</h4>
                                    </div>
                                </div>{/* End Tab 2 Content */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUsVisiMisi