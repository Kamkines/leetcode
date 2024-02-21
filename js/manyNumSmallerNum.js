var smallerNumbersThanCurrent = function (nums) {
     let array = [];
     for (let i = 0; i < nums.length; i++) {
          let count = 0;
          for (let j = 0; j < nums.length; j++) {
               if (j != i && nums[j] < nums[i]) {
                    count++;
               }
          }
          array.push(count);
     }
     console.log(array);
};

// example

smallerNumbersThanCurrent([7, 7, 7, 7]);
