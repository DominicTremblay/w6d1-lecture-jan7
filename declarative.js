// [5,6,7,8] => [10,12,14,16]

const numbers = [5, 6, 7, 8];
const doubleArray = [];
// imperative
const double = () => {
  for (const nb of numbers) {
    doubleArray.push(nb * 2);
  }
  return doubleArray;
};

// Declarative

// const doubleNumbers = numbers.map(nb => nb * 2);

// console.log(doubleNumbers);
