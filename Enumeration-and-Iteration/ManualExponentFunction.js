const toThePowerOf = (num, exp) => {
  const items = Array(exp).fill(num);
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  return items.reduce(reducer);
};

toThePowerOf(2, 3); //?
toThePowerOf(3, 3); //?
toThePowerOf(4, 2); //?
toThePowerOf(10, 10); //?
10 ** 10; //?

// JavaScript coding excercises / enumeration-iteraction / Build a Manual Exponent Function in JavaScript
