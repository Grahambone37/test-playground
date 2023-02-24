import './App.css';
import { useState } from 'react';

function App() {
  const [btnColor, setBtnColor] = useState('green')
  const newBtnColor = btnColor === 'green' ? 'blue' : 'green'

  const [btnDisabled, setBtnDisabled] = useState(false)

  const isCheckboxEnabled = btnDisabled ? 'disabled' : 'enabled'

  return (
    <div className="App">
      <h1>Testing Playground</h1>
      <h3>Button is {isCheckboxEnabled}</h3>
      <button
        style={{ backgroundColor: btnColor }}
        onClick={() => setBtnColor(newBtnColor)}
        disabled={btnDisabled}
      >
        Change button color to {newBtnColor}
      </button>
      <input type="checkbox" id="disable-button" name="disable-button" onChange={e => setBtnDisabled(e.target.checked) } />
      <label htmlFor="disable-button">Disable Btn</label>
    </div>
  );
}

export default App;
