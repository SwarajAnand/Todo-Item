import { useState } from "react";

function Demo() {
  const [number, setNumber] = useState(1);

  //   let number = 1;

  function increment() {
    // number = number + 1;
    setNumber(number + 1);
    // console.log(number);
  }

  return (
    <div>
      <h2 onClick={increment}>The count is: {number}</h2>
    </div>
  );
}

export default Demo;
