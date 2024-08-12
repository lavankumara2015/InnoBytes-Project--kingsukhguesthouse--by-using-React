import React from "react";
import "./formSection.css";
import { BookNowBTN } from "../bookNowBtn/bookNow";

function FormSection() {
  return (
 <>
   <section className="formSection">
      <div className="formSection__container">
        <div className="formSection__contactInfo">
          <div className="formSection__contactInformation">
            <p>Contact Info</p>
            <ul>
              <li>
                <span>
                  <img
                    src="https://www.kingsukhguesthouse.com/images/location.png"
                    alt="location image"
                  />
                </span>
                <span>
                  Beside Barshal Water Tank,
                  <br />
                  Manpur, Barhanti,
                  <br />
                  West Bengal 723156
                </span>
              </li>
              <li>
                <span>
                  <img
                    src="https://www.kingsukhguesthouse.com/images/mail.png"
                    alt="mail image"
                  />
                </span>
                <span>kkghosh0099@gmail.com</span>
              </li>
              <li>
                <span>
                  <img
                    src="https://www.kingsukhguesthouse.com/images/call.png"
                    alt="call image"
                  />
                </span>
                <span>
                  <a href="tel:+919007062180"> +91 9007062180 </a>
                </span>
              </li>
            </ul>
          </div>
          <ul class="socialMedia">
            <li>
              <a href="#">
                <img src="https://www.kingsukhguesthouse.com/images/1.png" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/kingsukhguesthouse/"
                target="_blank"
              >
                <img src="https://www.kingsukhguesthouse.com/images/3.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://www.kingsukhguesthouse.com/images/2.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://www.kingsukhguesthouse.com/images/5.png" />
              </a>
            </li>
          </ul>
        </div>
        <div className="contactForm1">
  <h2>Send a Message</h2>
  <div className="inputContainer">
  <div className="inputsChildOne">
    <input type="text" id="firstName" placeholder="First Name" />
    <input type="text" placeholder="Last Name" />

  </div>
  <div className="inputsChildTwo">
    <input type="text" id="firstName" placeholder="Email Address" />
    <input type="text" placeholder="Mobile Number" />
  </div>

<div className="textarea">
<textarea placeholder="Write your message here...">
</textarea>
</div>

<div className="submit">
<input type="submit" value="Send" />
</div>

  </div>
  
</div>
      </div>
    </section>
    <section className="Map_section">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5017351225647!2d86.85721547510981!3d23.586332378782714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1705088034844!5m2!1sen!2sin" width="100%" height="400" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
 </>

  );
}

export default FormSection;
