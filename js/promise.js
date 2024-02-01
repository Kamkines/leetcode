var addTwoPromises = async function (promise1, promise2) {
     let prom1 = await promise1;
     let prom2 = await promise2;
     return prom1 + prom2;
};

//example

let promise1 = new Promise((resolve) => setTimeout(() => resolve(10), 50));
let promise2 = new Promise((resolve) => setTimeout(() => resolve(-12), 30));

addTwoPromises(promise1, promise2);

// //Solution from Leetcode

var addTwoPromises = async function (promise1, promise2) {
     // Wait for both promises to resolve and retrieve their values
     const [value1, value2] = await Promise.all([promise1, promise2]);

     // Return a new promise that resolves with the sum of the values
     return value1 + value2;
};
