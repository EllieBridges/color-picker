import { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";
import Button from "./Button";

function ColorGuess() {
  const [color, setColor] = useState("rgba(255,255,255,1)");

  return (
    <div className="card inline-block h-96 w-96 mx-auto my-20 p-2">
      <ColorPicker
        hidePresets
        hideControls
        // hideInputs
        hideOpacity
        value={color}
        onChange={setColor}
      />
      <input type="color"></input>

      <Button />
    </div>
  );
}

export default ColorGuess;
