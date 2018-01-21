export default (expenses) => {
  let total = expenses.reduce((prevVal, elem) => prevVal + elem.amount, 0);
  return total;
};