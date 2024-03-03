var sumOddLengthSubarrays = function (arr) {
     let count = 0;
     for (let i = 0; i < arr.length; i++) {
          for (let j = i; j < arr.length; j += 2) {
               for (let k = i; k <= j; k++) {
                    count += arr[k];
               }
          }
     }
     console.log(count);
};

// example
sumOddLengthSubarrays([1, 4, 2, 5, 3]);
