import { useEffect, useState, useRef } from "react";
import { BookNowBTN } from "../bookNowBtn/bookNow";
import "./aboutHotel.css";

export const AboutHotelSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const serviceListRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        cardsObserver.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          cardsObserver.unobserve(card);
        }
      });
    };
  }, []);

  useEffect(() => {
    const serviceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    serviceListRefs.current.forEach((item) => {
      if (item) {
        serviceObserver.observe(item);
      }
    });

    return () => {
      serviceListRefs.current.forEach((item) => {
        if (item) {
          serviceObserver.unobserve(item);
        }
      });
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className={`aboutHotelSection ${isVisible ? "visible" : ""}`}
      >
        <div className="aboutHotelSection__img">
          <img src="../assets/out.jpg" alt="Hotel exterior" />
        </div>
        <div className="aboutHotelSection__text">
          <p className="aboutHotelSection__aboutUs">ABOUT US</p>
          <h6>The Best Holidays Start Here!</h6>
          <p>
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped
            by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
            Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
            captivating Panchat Dam. Revel in the embrace of comfort, relish
            delightful meals, and unwind in our verdant garden oasis. Your ideal
            retreat beckons, promising a harmonious blend of nature's beauty and
            heartfelt hospitality. Explore the hidden gems of Purulia, creating
            memories that linger long after your stay.
          </p>
          <p className="aboutHotelSection__Address">
            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
          </p>
          <p className="aboutHotelSection__Address">723156</p>
          <p className="aboutHotelSection__Address">
            Contact us: +91 9007062180
          </p>
          <div className="aboutHotelSection__btn">
            <BookNowBTN />
          </div>
        </div>
      </section>
      <section className="roomsViewSection">
        <p>OUR LIVING ROOM</p>
        <h6>The Most Memorable Rest Time Starts Here.</h6>
        <div className="roomsViewSection__card">
          <div
            className="roomsViewSection__cards"
            ref={(el) => (cardsRef.current[0] = el)}
          >
            <img src="./assets/small.jpg" alt="smallRoom" />
            <div className="roomsViewSection__icons">
              <span>
                <i className="ri-heart-fill"></i>
              </span>
              <span>
                <i className="ri-paint-fill"></i>
              </span>
              <span>
                <i className="ri-shield-star-line"></i>
              </span>
            </div>
            <h5>Cozy Haven Room</h5>
            <p>
              Escape to comfort in our Cozy Haven Room, a snug retreat designed
              for intimate relaxation.
            </p>
            <p>
              Starting from
              <span className="roomsViewSection__price">Rs. 1000/night</span>
            </p>
            <div className="roomsViewSection__btn">
              <BookNowBTN />
            </div>
          </div>
          <div
            className="roomsViewSection__cards"
            ref={(el) => (cardsRef.current[1] = el)}
          >
            <img src="./assets/large.jpg" alt="smallRoom" />
            <div className="roomsViewSection__icons">
              <span>
                <i className="ri-heart-fill"></i>
              </span>
              <span>
                <i className="ri-paint-fill"></i>
              </span>
              <span>
                <i className="ri-shield-star-line"></i>
              </span>
            </div>
            <h5>Spacious Serenity Suite</h5>
            <p>
              Indulge in luxury and ample space in our Spacious Serenity Suite,
              where tranquility meets roomy elegance.
            </p>
            <p>
              Starting from
              <span className="roomsViewSection__price">Rs. 1500/night</span>
            </p>
            <div className="roomsViewSection__btn">
              <BookNowBTN />
            </div>
          </div>
        </div>
      </section>
      <section className="service">
        <div className="service__container">
          <div className="service__content">
            <p className="service__heading">SERVICES</p>
            <h2>Strive Only For The Best.</h2>
            <ul className="service__list">
              <li ref={(el) => (serviceListRefs.current[0] = el)}>
                <span>
                  <i className="ri-shield-star-line" />
                </span>
                High Class Security
              </li>
              <li ref={(el) => (serviceListRefs.current[1] = el)}>
                <span>
                  <i className="ri-24-hours-line" />
                </span>
                24 Hours Room Service
              </li>
              <li ref={(el) => (serviceListRefs.current[2] = el)}>
                <span>
                  <i className="ri-restaurant-2-fill" />
                </span>
                Restaurant
              </li>
              <li ref={(el) => (serviceListRefs.current[3] = el)}>
                <span>
                  <i className="ri-map-2-line" />
                </span>
                Tourist Guide Support
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="BookingsSection" >
<div className="BookingsSection__Booking__Completed">
  <p>100+</p>
  <p>Bookings Completed</p>
</div>
<div className="BookingsSection__Booking__happy__customers">
  <p>150+</p>
  <p>Happy Customers</p>
</div>
</section><br/>
<section className="BookingGallary">
<p>GALLARY</p>
<div className="BookingGallary__images">
  <div className="box1">
    <img src="./assets/out.jpg" alt="" />
  </div>
  <div className="box2">
    <img src="./assets/ayodhya.webp" alt="" />
  </div>
  <div className="box3">
    <img src="./assets/large.jpg" alt="" />
  </div>
  <div className="box4">
    <img src="./assets/palash.webp" alt="" />
  </div>
  <div className="box5">
    <img src="./assets/small.jpg" alt="" />
  </div>
  <div className="box6">
    <img src="./assets/baranti.webp" alt="" />
  </div>
  <div className="box7">
    <img src="./assets/recep.jpg" alt="" />
  </div>
  <div className="box8">
    <img src="https://www.kingsukhguesthouse.com/assets/flower.jpg" alt="" />
  </div>
  <div className="box9">
    <img src="./assets/room1.jpg" alt="" />
  </div>
  <div className="box10">
    <img src="./assets/mithonDam.webp" alt="" />
  </div>
  <div className="box11">
    <img src="./assets/service.jpg" alt="" />
  </div>
</div>

</section>
</>
  );
};
