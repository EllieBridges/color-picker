import { useEffect, useState } from "react";
import Header from "./Header";
import ColorCard from "./ColorCard";
import ColorGuess from "./ColorGuess";
import hexCode from "./codeGenerator";

function App() {
  const [lives, setLives] = useState(3);
  const [points, setPoints] = useState(0);
  const [hex, setHex] = useState("");

  useEffect(() => setHex(hexCode()), [points]);

  return (
    <div className="">
      <Header title="Color Picker" subtitle="Test your Hex Code Knowledge" />
      <div className="flex flex-row py-20 px-40 h-2/3">
        <div className="flex flex-col w-1/2 items-center inline">
          <ColorCard hex={hex} />
        </div>
        <div className="flex flex-col w-1/2  items-center inline">
          <ColorGuess />
        </div>
      </div>
    </div>
  );
}

//need to covert generated hex to RGB then give a buffer to numbers then convert it back to hex.
export default App;
