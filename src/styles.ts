import styled from "styled-components";

export const AppContainer = styled.div`
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3179ba;
  height: 100%;
  padding: 20px;
  width: 100%;
`;

export const CoinContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const CoinValue = styled.div`
  color: black;
`;

export const ButtonTheme = styled.button`
  background-color: orange;
  color: white;
  width: 6em;
  height: 2em;
  border-radius: 1.5em;
  border: 0em;
`;
export const PizzaButtonTheme = styled.button`
  background-color: white;
  color: black;
  width: 3em;
  height: 1.5em;
  margin: 0.2em;
  border-radius: 0em;
  border: 0.2em;
  border-color: black;
`;
export const PizzaCount = styled.input`
  background-color: white;
  width: 4em;
  margin: 0.2em;
  border-radius: 100em;
  text-align: center;
`;

export const BlockContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3em;
`;
export const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;
