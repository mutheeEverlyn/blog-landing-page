
import './featureSection.scss';

const FeatureSection = () => {
  return (
    <section className="features">
          <h2>Designed for the future</h2>
          <div className="container">
          <div className='img'>
          <img src='./src/assets/illustration-editor-desktop.svg' alt='feature1-image'/>
        </div>
          <div className='content'>
          <h3>Introducing an extensible editor</h3>
          <p>
            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown.
          </p>
          <h3>Robust content management</h3>
          <p className='item'>
            Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.
          </p>
          </div>
        </div>
        <div className="stateOfArt">
          <div className='image'>
            <img src='./src/assets/illustration-phones.svg'/>
          </div>
          <div className='stateContent'>
          <h2>State of the Art Infrastructure</h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
          </p>
          </div>
          
        </div>
        <div className="laptop">
          <div className='img'>
            <img src='./src/assets/illustration-laptop-desktop.svg' alt='laptop'/>
          </div>
          <div className='content'>
          <h2>Free, open, simple</h2>
          <p>
            Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
          </p>
          <h2>Powerful tooling</h2>
          <p>
            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
          </p>
          </div>
        </div>
    </section>
  );
};

export default FeatureSection;
