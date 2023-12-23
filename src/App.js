import './App.css';
import HomePage from './components/HomePage';
import Register from './components/Register';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalDetails from './components/PersonalDetails';
import VibeTo from './components/VibeTo';
import PromptPage from './components/PromptPage'


function App() {
  const [myHomePage , setMyHomePage] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setMyHomePage(false)
    }, 4000)
  })

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={myHomePage ? <HomePage /> : <Register/>}></Route>
        <Route path="/personal-details" element={<PersonalDetails />}></Route>
        <Route path="/vibe-to" element={<VibeTo />}></Route>
        <Route path="/prompt-page" element={<PromptPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
