
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo"><img src='./src/assets/logo.svg' alt='logo'></img></div>
        <nav className="nav">
          <ul>
            <li><a href="#">Product</a><img src='./src/assets/icon-arrow-light.svg' alt='icon-arrow'></img></li>
            <li><a href="#">Company</a><img src='./src/assets/icon-arrow-light.svg' alt='icon-arrow'></img></li>
            <li><a href="#">Connect</a><img src='./src/assets/icon-arrow-light.svg' alt='icon-arrow'></img></li>
          </ul>
        </nav>
        <div className="buttons">
          <button className="login">Login</button>
          <button className="sign-up">Sign Up</button>
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
