import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroBanner from "./HeroBanner";
import progressbar_4 from "../assets/progress_bar4.png";
import "./PromptPage.css";
import { useSelector } from "react-redux";

export default function PromptPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const API_KEY = "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";
  const userName = useSelector((state) =>state.home.userData.name)
  const userGener = useSelector((state) =>state.home.geners.gener);

  const inputScript = `Wish a happy birthday to ${userName}.  
  Ensure that "Happy birthday" is mentioned at least twice in the lyrics, and it should rhyme. The lyrics should use simple, short, and easy to pronounce words as much as possible.
  Using the above information, please write 16 lines of ${userGener} lyrics that I can dedicate to him/her for his/her birthday.  Each line can have maximum of 8 words or 40 characters.
  The lyrics generated should be completely unique and never written before every single time and should not in any way or manner infringe on any trademarks/copyrights or any other rights of any individual or entity anywhere in the world. Any references or similarity to existing lyrics of any song anywhere in the world needs to be completely avoided. Any mention of proper nouns i.e. names or places of any manner apart from the ones mentioned above needs to be completely avoided. The lyrics generated should not be insensitive or should not offend any person/ place/ caste/ religion/ creed/ tribe/ country/ gender/ government/ organisation or any entity or individual in any manner whatsoever. Any words which might be construed directly or indirectly as cuss words or are offensive in any language should also be completely avoided. 
  `;

  const handleSendMessage = async () => {
    // Make a request to the ChatGPT API with the user input
    const response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-002/completions",
      {
        prompt: inputScript,
        max_tokens: 1000,
        stop: null,
        temperature: 0.5,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    setMessages([response.data.choices[0].text]);
    console.log(messages);
    setInput("");
  };
  useEffect(()=>{
    handleSendMessage()
  },[])

  return (
    <div>
      <HeroBanner />
      <div className="promptContainer">
        <div className="imageContainer">
          <img src={progressbar_4} alt="" />
        </div>
        <h2>Your songs lyrics are ready</h2>
        <textarea name="rapSong" cols="50" rows="10" value={messages}></textarea>
      </div>
    </div>
  );
}
