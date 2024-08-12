import "./footer.css";
import { BookNowBTN } from "../bookNowBtn/bookNow";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__container">
          <div className="footer__hotelName">
            <h5>Kingsukh Guest House</h5>
            <p>
              Discover a world of comfort, luxury, and adventure as you explore
              our curated selection of hotels, making every moment of your
              getaway truly extraordinary.
            </p>
            <div className="footer__bookNowBTN">
            <BookNowBTN />

            </div>
          </div>  
          <div className="footer__links">
          <h5>
          QUICK LINKS
          </h5>
          <ul>
            <li><a href="#">Browse Destinations</a></li>
            <li><a href="#">Special Offers & Packages</a></li>
            <li><a href="#">Room Types & Amenities</a></li>
            <li><a href="#">Customer Reviews & Ratings</a></li>
            <li><a href="#">Travel Tips & Guides</a></li>
          </ul>
          </div>
          <div className="footer__links">
          <h5>
          OUR SERVICES          </h5>
          <ul>
            <li><a href="#">Concierge Assistance</a></li>
            <li><a href="#">Flexible Booking Options</a></li>
            <li><a href="#">Airport Transfers</a></li>
            <li><a href="#">Wellness & Recreation</a></li>
          </ul>
          </div>
          <div className="footer__links">
          <h5>
          CONTACT US</h5>
         <p>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
<p>      <a href="mali:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a>
</p>     <p> <a href="tel:+919007062180">+91 9007062180</a></p>
      <div className="footer__social-links">
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-youtube" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://www.instagram.com/kingsukhguesthouse/">
            <i className="fab fa-instagram" />
          </a>

        </div>

          </div>
        </div>
        <p className="footer__copyRight">Copyright © 2024 Kingsukh Guest House. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
