import Big from 'big-js';

const operate = (numberOne, numberTwo, operations) => {
  const [one, two] = [Big(numberOne), Big(numberTwo)];

  switch (operations) {
    case '+':
      return one.plus(two).toString();
    case '-':
      return one.minus(two).toString();
    case '*':
      return one.times(two).toString();
    case '÷':
      if (two.toString() === '0') {
        return '0';
      }
      return one.div(two).toString();
    default:
      return '0';
  }
};

export default operate;
