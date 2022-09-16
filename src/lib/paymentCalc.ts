export const paymentCalc = (totalPrice: number, totalPayment: number) => {
  let x = (totalPayment * 100 - totalPrice * 100) / 100;
  return x;
};
