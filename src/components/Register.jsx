import React, { useState } from "react";
import "./Register.css";
import Progressbar_1 from "../assets/progress-bar.png";
import celebrations from "../assets/celebrations2.png";
import HeroBanner from "./HeroBanner";
import Modal from "./Modal";

export default function Register() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [redFlag , setRedFlag] = useState(false)

  const handlePhoneNumberChange = (e) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
    const phoneRegex = /^\d{10}$/;
    setIsValidPhoneNumber(phoneRegex.test(newPhoneNumber));
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Validate the email using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(newEmail));
  };

  const openModal = (e) => {
    e.preventDefault();
    if(isValidPhoneNumber && isValidEmail){
      setIsModalOpen(true);
    }else{
      console.log('Please fill all details')
      setRedFlag(true)
    }

  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <HeroBanner />
      <div className="registerContainer">
        <div className="imageContainer">
          <img src={Progressbar_1} alt="" />
          <img src={celebrations} alt="" />
          <div className="InputFieldContainer">
            <h2>Register to create</h2>
            <form className="form-Container">
              {/* Phone Number Input */}
              <input
                className="input-container"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                pattern="[0-9]{10}"
                value={phoneNumber}
                placeholder="Phone Number"
                onChange={handlePhoneNumberChange}
                required
              />
              {!isValidPhoneNumber && (
                <p className="errorValidation">
                  Please enter a valid 10-digit phone number.
                </p>
              )}
              <br />
              {/* Full Name Input */}
              <input
                className="input-container"
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                required
              />
              <br />
              {/* Email Address Input */}
              <input
                className="input-container"
                type="email"
                id="email"
                name="email"
                placeholder="Email ID"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {!isValidEmail && (
                <p className="errorValidation">
                  Please enter a valid email address.
                </p>
              )}
              <br />
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="terms">
                  I accept Terms & Condition and
                  <br />
                  Privacy policy of Mondelez (Cadbury)
                </span>
              </label>
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="terms">
                  I would like to receive promotional
                  <br />
                  communication from Mondelez (Cadbury) <br />
                  about its products and offers.
                </span>
              </label>
                <p className={redFlag ? "showError" : "hideError"}>Please fill all the details</p>
              <button
                onClick={openModal}
                className="submit-button"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
    </div>
  );
}









// const handlePhoneNumberChange = (e) => {
//     setPhoneNumber(e.target.value);
//     setIsValidPhoneNumber(phoneRegex.test(phoneNumber));
//   };
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     // Validate the email using a regular expression
//     setIsValidEmail(emailRegex.test(email));
//   };
//   console.log(emailRegex.test(email))
//   const openModal = (e) => {
//     e.preventDefault();
//     if(phoneRegex.test(phoneNumber) && emailRegex.test(email)){
//       setIsModalOpen(true);
//     }else{
   
//     console.log("please enter the details")
//     }
//   };

//   const closeModal = (e) => {
//     setIsModalOpen(false);
//   };