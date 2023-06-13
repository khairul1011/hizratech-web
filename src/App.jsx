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
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ComingSoonPage from './pages/ComingSoonPage';
import PageNotFound from './pages/PageNotFound';
import News from './pages/News';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />     
          <Route path='/about' element={<AboutPage halaman="About" />} />     
          <Route path='/team' element={<TeamPage halaman="Team" />} />     
          <Route path='/contact' element={<ContactPage halaman="Kontak" />} />     
          <Route path='/portofolio' element={<PortfolioPage />} />     
          {/* <Route path='/blog' element={<BlogPage />} />      */}
          <Route path='/blog' element={<News />} />     
          <Route path='/blogdetail' element={<BlogDetailPage />} />     
          <Route path='/sistemdevelopment' element={<ComingSoonPage halaman="Sistem Development" />} />     
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
