import './assets/css/style.css'
import './assets/js/main.js'
import React,{useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './assets/components/header/Header'
import Index from './pages/Index';
import ContactPage from './pages/Contact';
import Footer from './assets/components/footer/Footer';
import PortfolioPage from './pages/PortofolioPage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ComingSoonPage from './pages/ComingSoonPage';
import PageNotFound from './pages/PageNotFound';
import SistemDevelopmentPage from './pages/SistemDevelopmentPage';
import HizraKasir from './pages/sistemdev/HizraKasirPage';
import SamterPage from './pages/sistemdev/SmaterPage';
import PustakaDigitalPage from './pages/sistemdev/PustakaDigitalPage';
import HizraWebsite from './pages/sistemdev/HizraWebsite';
import BlogPageStrapi from './pages/BlogPageStrapi';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <>
      <Header />
      <Router>
        <Routes>
          {/* Main */}
          <Route path='/' element={<Index />} />     
          <Route path='/about' element={<AboutPage halaman="About" />} />     
          <Route path='/team' element={<TeamPage halaman="Team" />} />     
          <Route path='/contact' element={<ContactPage halaman="Kontak" />} />     
          <Route path='/portofolio' element={<PortfolioPage />} />     

          {/* Blog */}
          {/* <Route path='/blog' element={<BlogPage />} />         */}
          <Route path='/blogdetail/:id' element={<BlogDetailPage />} />     
          <Route path='/blog' element={<BlogPageStrapi />} />     

          {/* Layanan Kami */}
          <Route path='/sistemdevelopment' element={<SistemDevelopmentPage />} />     
          <Route path='/sistemdevelopment/pustaka' element={<PustakaDigitalPage />} />     
          <Route path='/sistemdevelopment/kasir' element={<HizraKasir />} />   
          <Route path='/sistemdevelopment/smater' element={<SamterPage />} />     
          <Route path='/sistemdevelopment/website' element={<HizraWebsite />} />    

          {/* Coming Soon */}
          <Route path='/jualbeli' element={<ComingSoonPage halaman="Jual Beli Perangkat Lunak Dan Keras" />} />     
          <Route path='/layananpublik' element={<ComingSoonPage halaman="Layanan Publik" />} />   

          <Route path='*' element={<PageNotFound halaman="Not Found" />} />     
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
