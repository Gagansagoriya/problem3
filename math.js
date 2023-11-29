// math.js - a CommonJS module for performing calculations on a set of numbers

const sum =  function sum(nums) {
    return nums.reduce((total, num) => total + num, 0);
}

const mean = function mean(nums) {
    return sum(nums) / nums.length;
}

// Common JS Module 
module.exports = {
    sum,
    mean,
}