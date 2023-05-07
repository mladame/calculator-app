import Header from './components/Header';
import Keypad from './components/Keypad';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className='app-container'>
        <Header />
        {/* display + keypad */}
        <Keypad/>
      </div>

    </div>
  );
}

export default App;
 