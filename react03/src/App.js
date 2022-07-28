import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(5);
  const [color, setColor] = useState(false);
  return (
    <div>
      <i className="xi-heart"
        onClick={() => (setNumber(number + 1), setColor(!color))}
        style={{ color: color && 'red' }}></i> {number}
    </div>


  );
}

export default App;
