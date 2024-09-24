import './App.css';
import Flashcard from './Components/FlashCard';
import FlashcardContainer from './Components/FlashcardContainer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FlashcardContainer></FlashcardContainer>
    </div>
  );
}

export default App;
