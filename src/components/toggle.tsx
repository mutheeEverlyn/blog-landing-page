// import  { useState } from "react";
// import logo from "../assets/images/logo.svg";
// import iconClose from "../assets/images/icon-close.svg";
// import iconHamburger from "../assets/images/icon-hamburger.svg";
// import dropDownList from "./dropDownList";
// import data from "../Links";
// import "./css/navbar.scss";



// function Navbar() {
//   const [isOpen, setOpen] = useState(false);
//   //To find which menu is active and only display one at a time
//   const [activeDropdown, setActiveDropdown] = useState(null); 
//   const handleToggle = () => {
//     setOpen(!isOpen);
//   };
//   const toggleDropdown = (name) => {
//     setActiveDropdown(activeDropdown === name ? null : name);
//   };
//   return (
//     <nav className="nav-container">
//       <figure className="logo-container">
//         <img src={logo} alt="logo" className="logo navbar" />
//       </figure>
//       <div className={`nav-all-links-container ${isOpen ? "open" : ""}`}>
//         <ul className="product-company-connect-container">
//           {data.map((category) => (
//             <DropdownMenu 
//             key={category.id} 
//             category={category} 
//             isActive={activeDropdown === category.name}
//               toggleDropdown={toggleDropdown}
//               isOpen ={isOpen}
//             />
//           ))}
//         </ul>
//         <ul className="login-sign-up-container">
//           <li className="nav-link login active">Login</li>
//           <li className="sign-up">
//             <a className="link filled sign-up">Sign Up</a>
//           </li>
//         </ul>
//       </div>
//       <div className="toggle-icon-container" onClick={handleToggle}>
//         {isOpen ? (
//           <img src={iconClose} alt="icon-close" className="menu-icon" />
//         ) : (
//           <img src={iconHamburger} alt="icon-hamburger" className="menu-icon" />
//         )}
//       </div>
//     </nav>
//   );
// }
// export default Navbar;