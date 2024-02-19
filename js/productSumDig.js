var subtractProductAndSum = function (n) {
     let nums = n.toString().split("");
     let sumNum = 0;
     let digNum = 1;
     for (num of nums) {
          sumNum += parseInt(num);
          digNum *= parseInt(num);
     }
     console.log(digNum - sumNum);
};

// example

subtractProductAndSum(4421);
