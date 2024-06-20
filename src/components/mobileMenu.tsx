
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