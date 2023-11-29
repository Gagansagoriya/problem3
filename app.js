// Note:  Please do not change the prewritten code

// import the required module here

const math = require('./math');

const Solution = () => {

    const nums = [1, 2, 3, 4, 5];

    // write your code here to Display the results of the calculations on the console.

    const sumNum = math.sum(nums);

    const meanNum = math.mean(nums);
   
    console.log(`The sum is ${sumNum}`);

    console.log(`The mean is ${meanNum}`);


};
Solution();
module.exports = Solution;
