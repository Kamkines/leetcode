var numIdenticalPairs = function (nums) {
     let counter = 0;
     for (let i = 0; i < nums.length; i++) {
          for (let j = 0; j < nums.length; j++) {
               if (nums[j] == nums[i] && i < j) {
                    counter++;
               }
          }
     }
     console.log(counter);
};

// example

numIdenticalPairs([1, 1, 1, 1]);
