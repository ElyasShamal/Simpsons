import "./App.css";
import Charecters from "./Components/Charecters";
import { characters } from "./data";

function App() {
  return (
    <div className="App">
      <h1 className="title">The Simpsons</h1>
      <div className="container">
        <Charecters />
      </div>
    </div>
  );
}

export default App;
