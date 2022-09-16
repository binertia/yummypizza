import { CoinContainer, CoinValue } from "../styles";

const CoinCalc = (x: number) => {
  let a = 0,
    b = 0,
    c = 0,
    d = 0,
    e = 0,
    f = 0,
    g = 0;
  x = x * 100;

  while (x - 1000 >= 0) {
    ++a;
    x -= 1000;
  }
  while (x - 500 >= 0) {
    ++b;
    x -= 500;
  }
  while (x - 200 >= 0) {
    ++c;
    x -= 200;
  }
  while (x - 150 >= 0) {
    ++d;
    x -= 150;
  }
  while (x - 20 >= 0) {
    ++e;
    x -= 20;
  }
  while (x - 10 >= 0) {
    ++f;
    x -= 10;
  }
  while (x - 5 >= 0) {
    ++g;
    x -= 5;
  }
  if (x > 4.9 && x < 5) {
    ++g;
  }
  while (g <= 2 && g - 2 >= 0) {
    g -= 2;
    ++f;
  }
  while (f <= 2 && f - 2 >= 0) {
    f -= 2;
    ++e;
  }
  return (
    <CoinContainer>
      <CoinValue>{a} :10$</CoinValue>
      <CoinValue>{b} :5$</CoinValue>
      <CoinValue>{c} :2$</CoinValue>
      <CoinValue>{d} :1.5$</CoinValue>
      <CoinValue>{e} :0.2$</CoinValue>
      <CoinValue>{f} :0.1$</CoinValue>
      <CoinValue>{g} :0.05$</CoinValue>
    </CoinContainer>
  );
};
export default CoinCalc;
