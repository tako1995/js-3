// "use strict";

// EX1

function sum(...numbers) {
  let numberSum = 0;
  for (let item of numbers) {
    numberSum += item;
  }

  return numberSum;
}

let sumResult = sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(sumResult);

// EX2

let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};

function printName(user) {
  if (user.isloggedin) {
    return `${user.firstname} ${user.lastname}`;
  }
  return false;
}

let printNameResult = printName(user);
console.log(printNameResult);

// EX3

function getMax(numbers) {
  let maxValue = 0;
  for (let item of numbers) {
    if (item > maxValue) {
      maxValue = item;
    }
  }
  return maxValue;
}

let getMaxvaleResult = getMax([14, 98, 55, 36, 97]);
console.log(getMaxvaleResult);

// EX4

function testfnc(x) {
  if (x % 2 == 0) {
    return "this number is even";
  }
  return "this number is odd";
}

let testFncResult = testfnc(12);
console.log(testFncResult);

// EX5

let array = [1, 2, 3, 4, 5];

for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

// EX6


let userAgeBirth = (birthYear, yearNow) => {
    let userAge = yearNow - birthYear;
    let resultAgebirth = userAge > 18 ? "სრულწლოვანი" : "არასრულწლოვანი";
    return resultAgebirth;
  };
  
  let lastResult = userAgeBirth(1995, 2023);
  console.log(lastResult);

