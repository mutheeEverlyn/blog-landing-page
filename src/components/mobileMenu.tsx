
// import iconLight from "../assets/images/icon-arrow-light.svg";
// import iconDark from "../assets/images/icon-arrow-dark.svg";


// import "./mobileMenu.scss";

// const DropdownMenu = ({ category, isActive, toggleDropdown, isOpen }) => {
//   return (
//     <li className="nav-link active">
      
//       <div onClick={() => toggleDropdown(category.name)}>
//         <a className="active">{category.name}</a>
//         <img
//           src={isOpen ? iconDark : iconLight}
//           alt="icon-arrow"
//           className={`arrow-icon ${isActive ? "clicked" : ""}`}
//         />
//       </div>
//       {isActive && (
//         <ul className="dropdown">
//           {category.links.map((link) => (
//             <li className="drop-down-link active" key={link}>
//               {link}
//             </li>
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// };

// export default DropdownMenu;

// const DropDownMenu = () => {
//   return (
//     <div>
//         <ul>
//            <li><a href="#">About</a></li>
//             <li><a href="#">Team</a></li>
//             <li><a href="#">Blog</a></li>
//             <li><a href="#">Careers</a></li>
//           </ul>
//     </div>
//   )
// }

// export default DropDownMenu

import arrowIcon from '../assets/icon-arrow-light.svg';
import { useState } from 'react';
import './header.scss'
const MobileMenu = () => {
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
      <div className="container">
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
        </div>
  )
}

export default MobileMenu
