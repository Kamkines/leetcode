var differenceOfSum = function (nums) {
     let countElem = 0;
     let countDigElem = 0;
     for (let i = 0; i < nums.length; i++) {
          countElem += nums[i];

          let numElem = nums[i].toString().split("");

          if (numElem.length > 1) {
               for (let j = 0; j < numElem.length; j++) {
                    countDigElem += parseInt(numElem[j]);
               }
          } else {
               countDigElem += nums[i];
          }
     }

     console.log(Math.abs(countElem - countDigElem));
};

// example

differenceOfSum([1, 15, 6, 3]);
