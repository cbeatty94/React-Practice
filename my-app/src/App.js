import { useState } from 'react';
import './App.css';


function App() {
  const [todos, setTodos] = useState([]);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello bitches! Welcome to my To Do List?
        </p>
        
      </header>
    </div>
  );
}

export default App;
