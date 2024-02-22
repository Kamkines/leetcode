var shuffle = function (nums, n) {
     let oneArray = nums.slice(0, n);
     let twoArray = nums.slice(n, nums.length);

     let newArray = [];

     for (let i = 0; i < n; i++) {
          newArray.push(oneArray[i]);
          newArray.push(twoArray[i]);
     }

     console.log(newArray);
};

// example

shuffle([2, 5, 1, 3, 4, 7], 3);
