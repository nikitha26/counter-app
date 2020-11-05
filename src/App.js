import React,{useState} from'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
      <div className="App">
        <header>
          <h1>Counter App Using State (React js)</h1>
        </header> 
        <h2>My Current Value is {count}</h2>
        <button onClick={() => (setCount(0))}>Reset Value</button><br/><br/>
        <button onClick={() => (count >= 10?"":setCount(count + 1))}>Increment Value</button>
        <button onClick={() => (count < 0?"":setCount(count - 1))}>Decrement Value</button>
      </div>   
  );
}
export default App;
