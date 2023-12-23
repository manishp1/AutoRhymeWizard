import React, { useState } from "react";
import HeroBanner from "./HeroBanner";
import "./VibeTo.css";
import ballon2 from "../assets/Balloon2.png";
import progressbar2 from "../assets/progress-bar2.png";
import headphone from "../assets/Headphone.png";
import PurpleTone from "../assets/PurpleMusicTone.png";
import calm from "../assets/Icons/Calm.png";
import happy from "../assets/Icons/Happy.png";
import motivate from "../assets/Icons/Motivational.png";
import romantic from "../assets/Icons/Romantic.png";
import funny from "../assets/Icons/Funny.png";
import rap from "../assets/Icons/Rap.png";
import rock from "../assets/Icons/Rock.png";
import pop from "../assets/Icons/Pop.png";
import desi from "../assets/Icons/Desi.png";
import edm from "../assets/Icons/EDM.png";
import maleAvtar from "../assets/Icons/Male.png";
import femaleAvtar from "../assets/Icons/Female.png";
import { useNavigate } from "react-router-dom";
import PromptPage from "./PromptPage";
import { useDispatch } from "react-redux";
import { getGeners } from "../store/HomeSlice";

export default function VibeTo() {
  const vibes = {
    mood:"",
    gener:"",
    avtar:""

  }
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [selectedgener, setSelectedgener] = useState("");
  const [selectedAvtar, setSelectedAvtar] = useState("");
  const [funData, setFunData ] = useState({
    gener: "",
    avtar: "",
  });
  const [userVibes , setUserVibes] = useState(vibes)
  const [isvalidate, setIsValidate] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (emoji,e) => {
    setSelectedEmoji(emoji);
    setUserVibes({...userVibes, mood:e.target.alt})
  };

  const handleGenerClick = (gener, e) => {
    setSelectedgener(gener);
    setFunData({...funData, gener:e.target.alt})
    setUserVibes({...userVibes, gener:e.target.alt})
  };
  const handleAvtarClick = (avtar, e) => {
    setSelectedAvtar(avtar);
    //console.log({ avtar: e.target.alt });
    setFunData({...funData, avtar:e.target.alt})
    setUserVibes({...userVibes, avtar:e.target.alt})

  };

  dispatch(getGeners(funData))
  const handleSubmit = () => {
     navigate('/prompt-page')
  };

  return (
    <div>
      <HeroBanner />
      <div className="main-container">
        <img src={progressbar2} alt="progressBar" />
        <h2>what would you like their song's vibe to be</h2>
        <div className="image-Container">
          <img src={PurpleTone} alt="ballon2" />
          <img src={headphone} alt="Headphone" />
          <img src={ballon2} alt="ballon2" />
        </div>
        <div className="vibebox-container">
          <div className="headerContainer">
            <h3>Mood</h3>
          </div>
          <div className="emojiContainer">
            <div className="emojiBackground">
              <img
                src={happy}
                alt="happy"
                onClick={(e) => handleClick(happy,e)}
                style={{
                  backgroundColor: selectedEmoji === happy ? "orange" : "white",
                }}
              />
            </div>
            <div className="emojiBackground">
              <img
                src={romantic}
                alt="romantic"
                onClick={(e) => handleClick(romantic,e)}
                style={{
                  backgroundColor:
                    selectedEmoji === romantic ? "orange" : "white",
                }}
              />
            </div>
            <div className="emojiBackground">
              <img
                src={funny}
                alt="funny"
                onClick={(e) => handleClick(funny,e)}
                style={{
                  backgroundColor: selectedEmoji === funny ? "orange" : "white",
                }}
              />
            </div>
            <div className="emojiBackground">
              <img
                src={motivate}
                alt="motivate"
                onClick={(e) => handleClick(motivate,e)}
                style={{
                  backgroundColor:
                    selectedEmoji === motivate ? "orange" : "white",
                }}
              />
            </div>
            <div className="emojiBackground">
              <img
                src={calm}
                alt="calm"
                onClick={(e) => handleClick(calm,e)}
                style={{
                  backgroundColor: selectedEmoji === calm ? "orange" : "white",
                }}
              />
            </div>
          </div>
        </div>
        <div className="vibebox-container">
          <div className="headerContainer">
            <h3>Genre</h3>
          </div>
          <div className="emojiContainer">
            <div className="emojiBackground">
              <img
                src={rap}
                alt="rap"
                onClick={(e) => handleGenerClick(rap, e)}
                style={{
                  backgroundColor: selectedgener === rap ? "orange" : "white",
                }}
              />
            </div>
            <div className="emojiBackground">
              <img
                src={rock}
                alt="rock"
                onClick={(e) => handleGenerClick(rock, e)}
                style={{
                  backgroundColor: selectedgener === rock ? "orange" : "white",
                }}
              />
            </div>
            <div className="emojiBackground">
              <img
                src={pop}
                alt="pop"
                onClick={(e) => handleGenerClick(pop, e)}
                style={{
                  backgroundColor: selectedgener === pop ? "orange" : "white",
                }}
              />
            </div>
            <div className="emojiBackground">
              <img
                src={desi}
                alt="desi"
                onClick={(e) => handleGenerClick(desi, e)}
                style={{
                  backgroundColor: selectedgener === desi ? "orange" : "white",
                }}
              />
            </div>
            <div className="emojiBackground">
              <img
                src={edm}
                alt="edm"
                onClick={(e) => handleGenerClick(edm, e)}
                style={{
                  backgroundColor: selectedgener === edm ? "orange" : "white",
                }}
              />
            </div>
          </div>
        </div>
        <div className="vibebox-container">
          <div className="headerContainer">
            <h3>Singer's voice</h3>
          </div>
          <div className="singerAvtarContainer">
            <div className="avtarBackground">
              <img
                src={maleAvtar}
                alt="He"
                value={"male"}
                onClick={(e) => handleAvtarClick(maleAvtar, e)}
                style={{
                  backgroundColor:
                    selectedAvtar === maleAvtar ? "orange" : "white",
                }}
              />
            </div>
            <div className="avtarBackground">
              <img
                src={femaleAvtar}
                alt="She"
                value={"female"}
                onClick={(e) => handleAvtarClick(femaleAvtar, e)}
                style={{
                  backgroundColor:
                    selectedAvtar === femaleAvtar ? "orange" : "white",
                }}
              />
            </div>
          </div>
        </div>
        <p className={isvalidate ? "hideError" : "showError"}>
                Plase fill all the details
              </p>
        <div className="btn-container">
          <button
            className="submit-button"
            type="submit"
            onClick={handleSubmit}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
