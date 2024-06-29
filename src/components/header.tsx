import { useState } from 'react';
import './header.scss';
import logo from '../assets/logo.svg';
import arrowIcon from '../assets/icon-arrow-light.svg';
import hamburger from '../assets/icon-hamburger.svg';
import closeIcon from '../assets/icon-close.svg';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCompanyOpen, setCompanyOpen] = useState(false);
  const [isConnectOpen, setConnectOpen] = useState(false);
  const [isProductOpen, setProductOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    if (dropdown === 'company') {
      setCompanyOpen(!isCompanyOpen);
      setConnectOpen(false);
      setProductOpen(false);
    } else if (dropdown === 'connect') {
      setConnectOpen(!isConnectOpen);
      setCompanyOpen(false);
      setProductOpen(false);
    } else if (dropdown === 'product') {
      setProductOpen(!isProductOpen);
      setCompanyOpen(false);
      setConnectOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo"><img src={logo} alt='logo' /></div>
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a href="#" onClick={() => toggleDropdown('company')}>
                Company <img src={arrowIcon} alt='icon-arrow' />
              </a>
              {isCompanyOpen && (
                <ul className="dropdown">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" onClick={() => toggleDropdown('connect')}>
                Connect <img src={arrowIcon} alt='icon-arrow' />
              </a>
              {isConnectOpen && (
                <ul className="dropdown">
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Newsletter</a></li>
                  <li><a href="#">LinkedIn</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" onClick={() => toggleDropdown('product')}>
                Product <img src={arrowIcon} alt='icon-arrow' />
              </a>
              {isProductOpen && (
                <ul className="dropdown">
                  <li><a href="#">Overview</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Marketplace</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Integrations</a></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
        <div className="buttons">
          <button className="login">Login</button>
          <button className="sign-up">Sign Up</button>
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          <button>
            <img src={isMobileMenuOpen ? closeIcon : hamburger} alt='menu-icon' />
          </button>
        </div>
      </div>
      <section className="modern">
        <div className="content">
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <div className="btn">
            <button className="start-free">Start for Free</button>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
