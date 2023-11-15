import React from 'react'
import '../../css/style.css';
import '../../js/main.js'
const skilSvg1 = '/img/sklils/features-1.svg'
const skilSvg2 = '/img/sklils/features-2.svg'
const skilSvg3 = '/img/sklils/features-3.svg'

function Skils() {
    return <>
        <section id="features" className="features">
            <div className="container" data-aos="fade-up">
                <ul className="nav nav-tabs row gy-12 d-flex">
                    <li className="nav-item col-6 col-md-4 col-lg-2">
                        <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                            <i className="bi bi-window color-cyan" />
                            <h4>System Development</h4>
                        </a>
                    </li>{/* End Tab 1 Nav */}
                    <li className="nav-item col-6 col-md-4 col-lg-2">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                            <i className="bi bi-cpu bi-color-indigo" />
                            <h4>Pengadaan Barang & Jasa</h4>
                        </a>
                    </li>{/* End Tab 2 Nav */}
                    <li className="nav-item col-6 col-md-4 col-lg-2">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                            <i className="bi bi-person-lines-fill color-teal" />
                            <h4>Layanan Publik</h4>
                        </a>
                    </li>{/* End Tab 3 Nav */}
                </ul>
                <div className="tab-content">
                    <div className="tab-pane active show" id="tab-1">
                        <div className="row gy-4">
                            <div className="col-lg-8 order-2 order-lg-1" data-aos="fade-up" data-aos-delay={100}>
                                <h3>System Developmen</h3>
                                <p className="fst-italic">
                                Kami adalah perusahaan IT yang fokus pada pengembangan solusi sistem dan aplikasi inovatif. Dengan pendekatan Agile dan tim berpengalaman, kami siap memberikan solusi yang fleksibel dan berkualitas tinggi.
                                </p>
                                <ul>
                                    <li><i className="bi bi-check-circle-fill" /> Tim pengembangan kami berpengalaman dalam menghadirkan solusi terukur yang mengoptimalkan operasional dan kinerja bisnis.</li>
                                    <li><i className="bi bi-check-circle-fill" /> Layanan pengembangan kami mencakup pengembangan perangkat lunak kustom, integrasi sistem, dan pengelolaan proyek yang efektif.</li>
                                    <li><i className="bi bi-check-circle-fill" /> Kami siap berkolaborasi dengan Anda untuk menciptakan solusi sistem yang inovatif. Hubungi kami untuk informasi lebih lanjut.</li>
                                </ul>
                                <p>
                                Tim kami siap berkolaborasi dengan Anda untuk mencapai tujuan bisnis Anda. Hubungi kami untuk informasi lebih lanjut dan menjadi mitra pengembangan IT Anda yang handal.
                                </p>
                            </div>
                            <div className="col-lg-4 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay={200}>
                                <img src={skilSvg1} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>{/* End Tab Content 1 */}
                    <div className="tab-pane" id="tab-2">
                        <div className="row gy-4">
                            <div className="col-lg-8 order-2 order-lg-1">
                                <h3>Jual Beli Perangkat Lunak Dan Keras</h3>
                                <p>
                                Temukan solusi perangkat lunak yang inovatif dan efisien untuk memenuhi kebutuhan bisnis Anda. Kami menawarkan berbagai produk perangkat lunak yang dirancang khusus untuk meningkatkan produktivitas dan efektivitas operasional.
                                </p>
                                <p className="fst-italic">
                                Kami siap membantu Anda dalam memilih dan mengimplementasikan solusi perangkat lunak yang tepat untuk bisnis Anda. Hubungi kami sekarang untuk konsultasi gratis dan temukan bagaimana produk perangkat lunak kami dapat membantu mengoptimalkan operasi bisnis Anda.
                                </p>
                                <ul>
                                    <li><i className="bi bi-check-circle-fill" /> Keunggulan Produk: Unggulan produk perangkat lunak kami, termasuk kehandalan, skalabilitas, kemudahan penggunaan, integrasi, dan kemampuan penyesuaian.</li>
                                    <li><i className="bi bi-check-circle-fill" /> Layanan dan Dukungan: Layanan lengkap, termasuk pelatihan penggunaan, dukungan teknis, pembaruan, dan penyesuaian khusus sesuai kebutuhan pelanggan.</li>
                                    <li><i className="bi bi-check-circle-fill" /> Portofolio Pelanggan: Daftar pelanggan yang telah mempercayai produk perangkat lunak kami, menunjukkan reputasi dan kualitas perusahaan dalam menyediakan solusi yang efektif.</li>
                                    <li><i className="bi bi-check-circle-fill" /> Kontak dan Permintaan Penawaran: Hubungi kami melalui informasi kontak untuk permintaan penawaran atau pertanyaan lebih lanjut.

</li>
                                </ul>
                            </div>
                            <div className="col-lg-4 order-1 order-lg-2 text-center">
                                <img src={skilSvg2} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>{/* End Tab Content 2 */}
                    <div className="tab-pane" id="tab-3">
                        <div className="row gy-4">
                            <div className="col-lg-8 order-2 order-lg-1">
                                <h3>Layanan Publik  </h3>
                                <p>
                                Pergunakan teknologi inovatif untuk layanan publik yang berdampak positif. Dari aplikasi pemerintah hingga solusi manajemen data efisien, kami memajukan masyarakat melalui solusi teknologi yang berkelanjutan.
                                </p>
                                <ul>
                                    <li><i className="bi bi-check-circle-fill" /> Deskripsi Layanan Publik: Pengembangan aplikasi untuk pemerintah daerah, sistem manajemen data kesehatan, dan platform e-learning untuk pendidikan.</li>
                                    <li><i className="bi bi-check-circle-fill" /> Manfaat dan Dampak: Peningkatan aksesibilitas, efisiensi, transparansi, dan pengembangan sumber daya manusia di sektor publik.</li>
                                    <li><i className="bi bi-check-circle-fill" /> Inovasi Teknologi: Penggunaan teknologi inovatif seperti kecerdasan buatan, big data analytics, dan Internet of Things (IoT) untuk meningkatkan efisiensi dan kualitas layanan publik.</li>
                                </ul>
                                <p className="fst-italic">
                                Hubungi kami sekarang untuk informasi lebih lanjut dan berkontribusi dalam menciptakan perubahan positif dalam masyarakat.
                                </p>
                            </div>
                            <div className="col-lg-4 order-1 order-lg-2 text-center">
                                <img src={skilSvg3} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>{/* End Tab Content 3 */}
                    
                </div>
            </div>
        </section>
    </>
}

export default Skils