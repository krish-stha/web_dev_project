import React from "react";
import "./Landing.css";
import newar from './images/newar.png';
import yomari from './images/yomari.jpeg';
import khajaset from './images/khajaset.webp';
import chatamari from './images/chatamari.jpg'
import bara from './images/bara.jpg'
import fryrice from './images/fryrice.avif'


import '@fortawesome/fontawesome-free/css/all.min.css';


const Landing = () => {
  return (
    <div className="landing">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Newari Delights</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
          <li>
            <a href="#login">Login as Admin</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div id="home" className="hero">
        <img src={newar} alt="Newari Restaurant" className="hero-image" />
        <h1 className="title">Newari Delights</h1>
        <p className="subtitle">Experience Authentic Newari Cuisine</p>
        <div className="buttons">
          <a href="#menu" className="btn">
            Menu
          </a>
          <a href="#about" className="btn">
            Contact
          </a>
        </div>
      </div>

      {/* Menu Section */}
      <section id="menu" className="section">
  <h2>Our Menu</h2>
  <p>Explore the rich and traditional flavors of Newari cuisine.</p>
  <div className="menu-list">
    <div className="menu-item">
      <img src={yomari} alt="Yomari" />
      <h3>Yomari</h3>
      <p>A steamed dumpling filled with jaggery and sesame, a traditional Newari sweet treat.</p>
      <p className="price">NPR 150</p>
    </div>
    <div className="menu-item">
      <img src={khajaset} alt="Newari Khaja Set" />
      <h3>Newari Khaja Set</h3>
      <p>A hearty platter of various traditional Newari dishes served with rice.</p>
      <p className="price">NPR 500</p>
    </div>
    <div className="menu-item">
      <img src="path_to_image/samay_baji.jpg" alt="Samay Baji" />
      <h3>Samay Baji</h3>
      <p>A festive Newari dish with beaten rice, lentils, meat, and chutney.</p>
      <p className="price">NPR 400</p>
    </div>
    <div className="menu-item">
      <img src={chatamari} alt="Chatamari" />
      <h3>Chatamari (Newari Pizza)</h3>
      <p>A crispy rice crepe topped with minced meat, vegetables, and spices.</p>
      <p className="price">NPR 250</p>
    </div>
    <div className="menu-item">
      <img src={bara} alt="Wo" />
      <h3>Wo (Lentil Pancake)</h3>
      <p>A savory lentil pancake served with chutney.</p>
      <p className="price">NPR 180</p>
    </div>
    <div className="menu-item">
      <img src={fryrice} alt="Fried Rice" />
      <h3>Fried Rice</h3>
      <p>Traditional Newari fried rice, mixed with vegetables and spices.</p>
      <p className="price">NPR 300</p>
    </div>
    <div className="menu-item">
      <img src="path_to_image/bara.jpg" alt="Bara" />
      <h3>Bara</h3>
      <p>Deep-fried lentil patties, served with chutney and pickles.</p>
      <p className="price">NPR 200</p>
    </div>
    <div className="menu-item">
      <img src="path_to_image/paneer_tikka.jpg" alt="Paneer Tikka" />
      <h3>Paneer Tikka</h3>
      <p>Marinated cottage cheese grilled to perfection with spices.</p>
      <p className="price">NPR 350</p>
    </div>
    <div className="menu-item">
      <img src="path_to_image/soup.jpg" alt="Newari Soup" />
      <h3>Newari Soup</h3>
      <p>A rich, spiced soup made with chicken, buffalo, or vegetables.</p>
      <p className="price">NPR 180</p>
    </div>
    <div className="menu-item">
      <img src="path_to_image/chura.jpg" alt="Chura" />
      <h3>Chura</h3>
      <p>Flattened rice mixed with spices and served as a light snack.</p>
      <p className="price">NPR 120</p>
    </div>
    <div className="menu-item">
      <img src="path_to_image/aalu_tama.jpg" alt="Aalu Tama" />
      <h3>Aalu Tama</h3>
      <p>A spicy and sour potato and bamboo shoot curry.</p>
      <p className="price">NPR 220</p>
    </div>
    <div className="menu-item">
      <img src="path_to_image/momo.jpg" alt="Momo" />
      <h3>Momo</h3>
      <p>Steamed dumplings stuffed with meat or vegetables, served with chutney.</p>
      <p className="price">NPR 150</p>
    </div>
    <div className="menu-item">
      <img src="path_to_image/chickpea_curry.jpg" alt="Chickpea Curry" />
      <h3>Chickpea Curry</h3>
      <p>A spicy chickpea curry served with rice or roti.</p>
      <p className="price">NPR 180</p>
    </div>
    <div className="menu-item">
      <img src="path_to_image/buff_curry.jpg" alt="Buff Curry" />
      <h3>Buff Curry</h3>
      <p>A traditional Newari curry made with tender buffalo meat and spices.</p>
      <p className="price">NPR 350</p>
    </div>
    <div className="menu-item">
      <img src="path_to_image/sukuti.jpg" alt="Sukuti" />
      <h3>Sukuti</h3>
      <p>Spicy dried meat, usually buffalo or goat, served with pickles.</p>
      <p className="price">NPR 250</p>
    </div>
    <div className="menu-item">
      <img src="path_to_image/sakhar.jpg" alt="Sakhar" />
      <h3>Sakhar</h3>
      <p>Sweetened barley flour dumplings, a special Newari dessert.</p>
      <p className="price">NPR 100</p>
    </div>
    <div className="menu-item">
      <img src="path_to_image/lassi.jpg" alt="Lassi" />
      <h3>Lassi</h3>
      <p>A yogurt-based drink, sweet or salted, refreshing and cooling.</p>
      <p className="price">NPR 120</p>
    </div>
    <div className="menu-item">
      <img src="path_to_image/juju_dhau.jpg" alt="Juju Dhau" />
      <h3>Juju Dhau</h3>
      <p>A sweet, creamy yogurt dessert topped with sugar syrup and dry fruits.</p>
      <p className="price">NPR 180</p>
    </div>
    <div className="menu-item">
      <img src="path_to_image/newari_burger.jpg" alt="Newari Burger" />
      <h3>Newari Burger</h3>
      <p>A twist on the traditional burger with Newari spices and fillings.</p>
      <p className="price">NPR 250</p>
    </div>
    <div className="menu-item">
      <img src="path_to_image/newari_burger.jpg" alt="Newari Burger" />
      <h3>Newari Burger</h3>
      <p>A twist on the traditional burger with Newari spices and fillings.</p>
      <p className="price">NPR 250</p>
    </div>
  </div>
</section>



      {/* About Us Section */}
      <section id="about-us" className="section">
  <h2>About Us</h2>
  <p>
    <strong>Newari Delights</strong> is a renowned restaurant located in the heart of Kathmandu, offering an authentic taste of traditional Newari cuisine. Since our establishment, we have been dedicated to preserving and promoting the rich culinary heritage of the Newar community, ensuring each dish is a reflection of the culture and history that defines us. 
  </p>
  <p>
    Our mission is to provide our customers with an unforgettable dining experience, offering a variety of classic and contemporary Newari dishes made with the finest ingredients. Whether you're visiting for a family meal, a celebration, or simply craving an authentic Newari feast, we promise to deliver an exceptional experience in a cozy and welcoming environment.
  </p>
  
  <div className="info-container">
    <div className="info-box">
      <i className="fas fa-utensils"></i>
      <h3>Authentic Newari Cuisine</h3>
      <p>We serve a wide variety of Newari dishes that embody the flavors and traditions of Nepal's vibrant culture.</p>
    </div>
    <div className="info-box">
      <i className="fas fa-building"></i>
      <h3>Traditional Ambiance</h3>
      <p>Our restaurant offers a cozy setting that reflects traditional Newari architecture and design, bringing you closer to our roots.</p>
    </div>
    <div className="info-box">
      <i className="fas fa-cogs"></i>
      <h3>Modern Digital Ordering</h3>
      <p>We’ve embraced digital technology by integrating a seamless online ordering system, so you can enjoy Newari Delights at your convenience.</p>
    </div>
  </div>
</section>

<footer className="footer">
  <h3>Newari Delights</h3>
  <p>
    Bringing you the best of authentic Newari cuisine, paired with a cozy ambiance and modern digital ordering experience. Enjoy a taste of Nepal's rich heritage!
  </p>
  


  {/* Footer Links */}
  <div className="footer-links">
    <a href="#home">Home</a>
    <a href="#menu">Menu</a>
    <a href="#about-us">About Us</a>
   
  </div>

  {/* Footer Bottom */}
  <div className="footer-bottom">
    <p>&copy; 2025 Newari Delights. All Rights Reserved.</p>
  </div>
</footer>


     
    </div>
  );
};

export default Landing;
