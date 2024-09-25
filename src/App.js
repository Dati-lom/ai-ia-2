import './App.css';
import FlashcardContainer from './Components/FlashcardContainer';
import HomeScreen from './Components/HomePage';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import questionsEn from "./Data/QuestionsEn.json";
import questionsKa from "./Data/QuestionsKa.json"; 
function App() {
  const [language, setLanguage] = useState('en'); // Language state
  const [translations, setTranslations] = useState(questionsEn)
  useEffect(()=>{
    console.log("tra");
    
    setTranslations(language === "en" ? questionsEn : questionsKa)
  },[language])

  return (
    <div className="App">
      <Navbar setLanguage={setLanguage} language={language}></Navbar>
      <Routes>
        <Route path="/" element={<HomeScreen translations={translations}></HomeScreen>}></Route>
        <Route path="/test" element={<FlashcardContainer language={language} setLanguage={setLanguage}></FlashcardContainer>}></Route>
      </Routes>


    
  </div>
  );
}

export default App;
