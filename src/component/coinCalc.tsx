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
      <CoinValue>
        {array[0].x} :{array[0].y}$
      </CoinValue>
      <CoinValue>
        {array[1].x} :{array[1].y}$
      </CoinValue>
      <CoinValue>
        {array[2].x} :{array[2].y}$
      </CoinValue>
      <CoinValue>
        {array[3].x} :{array[3].y}$
      </CoinValue>
      <CoinValue>
        {array[4].x} :{array[4].y}$
      </CoinValue>
      <CoinValue>
        {array[5].x} :{array[5].y}$
      </CoinValue>
      <CoinValue>
        {array[6].x} :{array[6].y}$
      </CoinValue>
      <CoinValue>
        {array[7].x} :{array[7].y}$
      </CoinValue>
    </CoinContainer>
  );
};
export default CoinCalc;

// old draft
// const CoinCalc = (x: number) => {
//   let a = 0,
//     b = 0,
//     c = 0,
//     d = 0,
//     e = 0,
//     f = 0,
//     g = 0;
//   x = x * 100;

//   while (x - 1000 >= 0) {
//     ++a;
//     x -= 1000;
//   }
//   while (x - 500 >= 0) {
//     ++b;
//     x -= 500;
//   }
//   while (x - 200 >= 0) {
//     ++c;
//     x -= 200;
//   }
//   while (x - 150 >= 0) {
//     ++d;
//     x -= 150;
//   }
//   while (x - 20 >= 0) {
//     ++e;
//     x -= 20;
//   }
//   while (x - 10 >= 0) {
//     ++f;
//     x -= 10;
//   }
//   while (x - 5 >= 0) {
//     ++g;
//     x -= 5;
//   }
//   if (x > 4.9 && x < 5) {
//     ++g;
//   }
//   while (g <= 2 && g - 2 >= 0) {
//     g -= 2;
//     ++f;
//   }
//   while (f <= 2 && f - 2 >= 0) {
//     f -= 2;
//     ++e;
//   }
