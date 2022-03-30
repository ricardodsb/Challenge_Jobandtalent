
//This represents N!

const factorial = (n) => {
    //base case
    if (n == 0 || n == 1) {
      return 1;
    }
    //recursive case
    return n * factorial(n - 1);
  };
  
  // This is the rest of the function 

const calculateExpValue = (x, n) => {
    let expValue = 0;
    for (let i = 0; i <= n; i++) {
      const iterationVal = x ** i / factorial(i);
      expValue += iterationVal;
    }
    return expValue;
  };
  console.log(calculateExpValue(5, 7));

