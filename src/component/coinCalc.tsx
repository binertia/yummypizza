import React from "react";
import { CoinContainer, CoinValue } from "../styles";

const CoinCalc = (Total: number) => {
  let value = Total;
  const array = [
    { x: 0, y: 10 },
    { x: 0, y: 5 },
    { x: 0, y: 2 },
    { x: 0, y: 1 },
    { x: 0, y: 0.5 },
    { x: 0, y: 0.2 },
    { x: 0, y: 0.1 },
    { x: 0, y: 0.05 },
  ];

  for (let i = 0, length = array.length; i < length; i++) {
    if (value - array[i].y >= 0) {
      array[i].x = (value / array[i].y) >> 0;
      value %= array[i].y;
    }
  }

  if (value > 0.049 && value < 0.05) array[7].x += 1;
  for (let i = 7; array[i].x > 1 && i > 5; i--) {
    array[i].x -= 2;
    array[i - 1].x += 1;
  }

  return (
    <CoinContainer>
      {array.map((a) => (
        <CoinValue>
          {a.x} : {a.y} $
        </CoinValue>
      ))}
    </CoinContainer>
  );
};
export default CoinCalc;
