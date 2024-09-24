import './App.css';
import FlashcardContainer from './Components/FlashcardContainer';
import Navbar from './Components/Navbar';
import { useState } from 'react';
function App() {
  const [language, setLanguage] = useState('en'); // Language state

  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage}></Navbar>
      <FlashcardContainer language={language}></FlashcardContainer>
    </div>
  );
}

export default App;
