import './App.css';
import { useState } from 'react';

function App() {
  const [btnColor, setBtnColor] = useState('green')
  const newBtnColor = btnColor === 'green' ? 'blue' : 'green'

  return (
    <div className="App">
      <h1>Testing Playground</h1>
      <button
        style={{ backgroundColor: btnColor }}
        onClick={() => setBtnColor(newBtnColor)}
      >
        Change button color to {newBtnColor}
      </button>
    </div>
  );
}

export default App;
