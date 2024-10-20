import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo} alt='' />
          <p>
            Sed commodo placerat scelerisque. Maecenas nec augue non ante
            fringilla fringilla fermentum ac nibh. In a placerat sapien, vitae
            mollis lorem. Quisque tincidunt rhoncus sollicitudin. Maecenas
            rhoncus risus scelerisque, viverra diam bibendum, aliquet ligula.
            Nam sem augue, Etiam sit amet iaculis arcu. Fusce bibendum sagittis
            ligula vitae viverra. Vivamus sed ante nec lorem iaculis elementum
            nec sit amet neque.
          </p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt='' />
            <img src={assets.linkedin_icon} alt='' />
            <img src={assets.twitter_icon} alt='' />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+64-021-299-1014</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        Copyright @ 2024, Tomato.com - All right reserve.
      </p>
    </div>
  );
}

export default Footer;
