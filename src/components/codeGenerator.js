//hex char can be 1-9 or a-Z

const isLetter = () => {
  const randomNum = Math.random();
  let decimal = randomNum.toFixed(1);
  if (decimal < 0.5) {
    return true;
  }
  return false;
};

const hexCode = () => {
  const letters = ["a", "b", "c", "d", "e", "f"];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let hex = ["#"];
  for (let i = 0; i < 6; i++) {
    if (isLetter()) {
      const index = Math.round(Math.random() * (letters.length - 1));
      hex.push(letters[index]);
    } else {
      const index = Math.round(Math.random() * 8);
      hex.push(numbers[index]);
    }
  }
  return hex.join("");
};

export default hexCode;
