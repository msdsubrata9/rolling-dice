import { useState } from "react";
import "./App.css";
import Dice from "./components/Dice";

function App() {
  const [number, setNumber] = useState("");
  const [diceList, setDiceList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const generateDiceList = () => {
      return [...Array(parseInt(number, 10))].map(() => {
        return Math.floor(Math.random() * 6) + 1;
      });
    };
    setDiceList(generateDiceList());
  };

  return (
    <div className="App">
      <div className="form-container">
        <form className="dice-form" onSubmit={handleSubmit}>
          <label htmlFor="dice-count">Number of dice</label>
          <input
            id="dice-count"
            type="number"
            min="1"
            max="99"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button>Roll</button>
        </form>
      </div>
      <div className="dice-container">
        {diceList.map((number, index) => {
          return <Dice key={index} number={number} />;
        })}
      </div>
    </div>
  );
}

export default App;
