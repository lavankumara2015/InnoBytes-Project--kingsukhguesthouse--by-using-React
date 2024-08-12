import { useEffect, useState } from "react";
import { BookNowBTN } from "../bookNowBtn/bookNow";
import "./nav.css";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-expand-md">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <p>Kingsukh</p>
              <p>Guest House</p>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Rooms</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Gallery</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Contact</a>
                </li>
              </ul>
            </div>
            <BookNowBTN />
          </div>
        </nav>

        <div className={`header__quotation ${isVisible ? "visible" : ""}`}>
          <p>Simple - Unique - Friendly</p>
          <h3>Make Yourself At Home</h3>
          <h3>In Our <span style={{ color: "var(--primary-color" }}>Guest House</span>.</h3>
        </div>
        <div className="header__btn">
          <BookNowBTN />
        </div>
      </header>
      <br/>
    </>
  );
};

export default NavBar;
