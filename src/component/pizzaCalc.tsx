import { useState } from "react";
import CoinCalc from "./coinCalc";
import useCounter from "../lib/useCounter";

import { paymentCalc } from "../lib/paymentCalc";
import {
  ButtonTheme,
  PizzaButtonTheme,
  PizzaCount,
  BlockContainer,
  Container,
} from "../styles";
const PizzaCalc = () => {
  const [showResults, setShowResults] = useState(false);
  const [showCalc, setShowCalc] = useState(true);

  const { count, increment, decrement, reset } = useCounter(0);
  const [payment, setPayment] = useState("");

  const handlePayment = (e: any) => {
    setPayment(e.target.value);
  };

  const handleAddAmount = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      changeCal(parseFloat(payment));
    }
  };

  const checkPizzaQuantity = () => {
    if (count <= 0) {
      alert("Error submitting");
      return;
    }
    setShowResults(!showResults);
  };

  const changeCal = (value: number) => {
    if ((count * (10.5 * 10)) / 10 > value) {
      alert("not enough money");
      return;
    } else setShowCalc(!showCalc);
  };

  return (
    <Container>
      {showResults ? null : (
        <BlockContainer>
          Pizza quantity :
          <PizzaCount
            value={count}
            disabled={true}
            onChange={(e) => e.target.value}
          />
          <PizzaButtonTheme onClick={increment}>+</PizzaButtonTheme>
          <PizzaButtonTheme onClick={decrement}>-</PizzaButtonTheme>
          <PizzaButtonTheme onClick={reset}>Reset</PizzaButtonTheme>
        </BlockContainer>
      )}

      <p>amount total {count * 10.5} $</p>

      <ButtonTheme
        onClick={() => {
          checkPizzaQuantity();
          setPayment("");
        }}
      >
        {showResults ? "back" : "submit"}
      </ButtonTheme>

      {showResults ? (
        <BlockContainer>
          amount tendered :
          <input
            onKeyPress={(e) => !/[0-9,.]/.test(e.key) && e.preventDefault()}
            onKeyDown={handleAddAmount}
            onChange={handlePayment}
          ></input>
          <ButtonTheme
            onClick={() => {
              changeCal(parseFloat(payment));
            }}
          >
            {showCalc ? "submit" : "change"}
          </ButtonTheme>
        </BlockContainer>
      ) : null}
      {showCalc ? null : (
        <BlockContainer>
          total changed :
          {CoinCalc(paymentCalc((count * 105) / 10, parseFloat(payment)))}
          <ButtonTheme
            type="submit"
            onClick={() => {
              reset();
              setPayment("");
              setShowResults(false);
              setShowCalc(true);
            }}
          >
            Done
          </ButtonTheme>
        </BlockContainer>
      )}
    </Container>
  );
};
export default PizzaCalc;
