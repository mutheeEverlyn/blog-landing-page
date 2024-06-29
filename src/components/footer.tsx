import './footer.scss';
import logo from '../assets/logo.svg'
const Footer = () => {
  return (
<footer className="footer">
<div className="container">
    <h2><img src={logo} alt='logo'></img></h2>
 <div className="footer-section">
    <h3>Product</h3>
    <ul>
      <li><a href="#">Overview</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Marketplace</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">Integrations</a></li>
    </ul>
   </div>
  <div className="footer-section">
    <h3>Company</h3>
        <ul>
           <li><a href="#">About</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
      </ul>
    </div>
            <div className="footer-section">
          <h3>Connect</h3>
          <ul>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
          </div>
   </div>
 </footer>
        );
      };
          export default Footer;