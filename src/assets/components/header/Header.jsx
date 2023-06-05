import React from 'react'
import '../../css/style.css';
import logo from '../../../assets/img/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return <>

    <Navbar expand="lg" fixed="top" id="navbar" style={{ backgroundColor: '#37517E', height: '80px' }} >
      <Container style={{ color: '#37517E' }}>
        <Navbar.Brand href="/" >
          <img
            alt=""
            src={logo}
            width="70"
            height="70"
            className="d-flex align-items-center"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color : '#ffff' }}/>
        <Navbar.Collapse className="ml-auto " style={{ backgroundColor: '#37517E', borderRadius: '10px', justifyContent : 'end' }}>
          <Nav className="ml-auto">
            <Nav.Link href="/" style={{ color: '#ffff' }}>Home</Nav.Link>
            <Nav.Link href="/about" style={{ color: '#ffff' }}>About</Nav.Link>     
            {/* <Nav.Link href="/portofolio" style={{ color: '#ffff' }}>Portofolio</Nav.Link> */}
            <Nav.Link href="/team" style={{ color: '#ffff' }}>Team</Nav.Link>
            <NavDropdown title="Layanan Kami" id="basic-nav-dropdown">
              <NavDropdown.Item href="/sistemdevelopment" style={{ color: '#37517E' }}>System Development</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/jualbeli" style={{ color: '#37517E', marginRight: '15px' }}>
              Jual Beli Perangkat Lunak dan Keras
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/layananpublik" style={{ color: '#37517E' }}>Layanan Publik</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.4" style={{ color: '#37517E' }}>
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="/blog" style={{ color: '#ffff' }}>Artikel</Nav.Link>
            <Nav.Link href="/contact" style={{ color: '#ffff' }}>Kontak</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">

        <h1 class="logo me-auto"><a href="index.html">Arsha</a></h1>
        <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link   scrollto" href="#portfolio">Portfolio</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
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
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a class="getstarted scrollto" href="#about">Get Started</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

      </div>
    </header>
  </>

}

export default Header