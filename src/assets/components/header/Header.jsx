import React from 'react'
import '../../css/style.css';
const logo = '/img/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  
  return <>

    <Navbar expand="lg" fixed="top" id="navbar" className='navbar'  >
      <Container>
        <Navbar.Brand href="/" >
          <img
            alt=""
            src={logo}
            width="60"
            height="60"
            className="d-flex align-items-center"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggler shadow-none border-0" style={{ color : '#ffff' }}/>
        <Navbar.Collapse className="ml-auto " style={{  borderRadius: '10px', justifyContent : 'end' }}>
          <Nav className="ml-auto">
            <Nav.Link href="/" style={{ color: '#ffff' }}>Home</Nav.Link>
            <Nav.Link href="/about" style={{ color: '#ffff' }}>About</Nav.Link>     
            {/* <Nav.Link href="/portofolio" style={{ color: '#ffff' }}>Portofolio</Nav.Link>
            <Nav.Link href="/team" style={{ color: '#ffff' }}>Team</Nav.Link> */}
            <NavDropdown title="Layanan Kami" id="basic-nav-dropdown" className='dropdown'>
              <NavDropdown.Item href="/sistemdevelopment" style={{ color: '#37517E' }}>System Development</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/jualbeli" style={{ color: '#37517E', marginRight: '15px' }}>
             Pengadaan Barang & Jasa
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/layananpublik" style={{ color: '#37517E' }}>Layanan Publik</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/blog" style={{ color: '#ffff' }}>Blog</Nav.Link>
            <Nav.Link href="/contact" style={{ color: '#ffff' }}>Kontak</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* <header id="header" className="fixed-top">
      <div classname="container d-flex align-items-center">
        <h1 classname="logo me-auto"><a href="index.html"><img src="{logo}" alt="" /></a></h1>
        <nav id="navbar" classname="navbar">
          <ul>
            <li><a classname="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a classname="nav-link scrollto" href="#about">About</a></li>
            <li><a classname="nav-link scrollto" href="#services">Services</a></li>
            <li><a classname="nav-link   scrollto" href="#portfolio">Portfolio</a></li>
            <li><a classname="nav-link scrollto" href="#team">Team</a></li>
            <li classname="dropdown"><a href="#"><span>Drop Down</span> <i classname="bi bi-chevron-down" /></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
          </ul>
          <i classname="bi bi-list mobile-nav-toggle" onclick="{handleClick}" />
        </nav>
      </div>
    </header> */}

  </>

}

export default Header