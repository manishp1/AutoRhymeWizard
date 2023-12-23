import React, { useState } from "react";
import HeroBanner from "./HeroBanner";
import progressBar from "../assets/progress-bar1.png";
import gift from "../assets/CapGift.png";
import sparkalAsset from "../assets/asset1.png";
import ballon from "../assets/Balloon.png";
import "./PersonalDetails.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {getUserData} from "../store/HomeSlice"


export default function PersonalDetails() {
  const [details, setDetails] = useState({});
  const [isvalidate, setIsValidate] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const inputValues = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    console.log(details);
  };
  dispatch(getUserData(details))
  const handleClick = (e) => {
    e.preventDefault();
    if (Object.keys(details).length === 3) {
      navigate("/Vibe-To");
    } else {
      setIsValidate(false);
    }
    
  };

  return (
    <div>
      <HeroBanner />
      <div className="personalDetailsContainer">
        <div className="imageContainer">
          <img src={progressBar} alt="progressbar" />
          <h2>Tell us about your loved one...</h2>
          <div className="giftContainer">
            <img src={sparkalAsset} alt="sparkal" />
            <img src={gift} alt="capgift" />
            <img src={ballon} alt="ballon" />
          </div>
          <div className="InputFieldContainer">
            <h2>Their Name</h2>
            <form className="form-Container">
              <input
                className="input-container"
                type="text"
                id="name"
                name="name"
                placeholder="xxxx xxxxxxxxx"
                onChange={(e) => inputValues(e)}
                required
              />
              <br />

              <h2>How old they'll be this birthday</h2>

              <input
                className="input-container"
                type="date"
                id="date"
                name="date"
                placeholder="23 years"
                onChange={(e) => inputValues(e)}
                required
              />
              <br />
              <h2>Gender</h2>
              <select
                id="gender"
                name="gender"
                onChange={(e) => inputValues(e)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <br />
              <p className={isvalidate ? "hideError" : "showError"}>
                Plase fill all the details
              </p>
              <button
                className="submit-button"
                onClick={handleClick}
                type="submit"
              >
                Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
