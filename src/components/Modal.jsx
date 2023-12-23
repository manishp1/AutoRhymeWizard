import React, { useState, useRef } from "react";
import "./Modal.css"; 
import { useNavigate } from "react-router-dom";
const Modal = ({ isOpen, onClose }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate()
  const handleInputChange = (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleInputKeyDown = (index, e) => {
    // Move to the previous input field on backspace if the current field is empty
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const otpNumber = '1234'
  const handleSubmit = () => {
    // Do something with the OTP, for example, send it to a server
    const enteredOtp = otp.join("");
    console.log("Entered OTP:", enteredOtp);
    if(enteredOtp === otpNumber){
      console.log('otp passed')
      navigate('/personal-details')
    }else {
      console.log('otp failed')
    }
    setOtp(["", "", "", ""]);


    // You can perform additional actions here, such as validation
    // or closing the modal
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Enter OTP</h2>

        <div className="otp-input-container">
          {otp.map((digit, index) => (
            <input
              className="otp-container"
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              type="text"
              maxLength="1"
              value={digit}
              
              onKeyDown={(e) => handleInputKeyDown(index, e)}
              onChange={(e) => handleInputChange(index, e.target.value)}
              required
            />
          ))}
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Modal;
