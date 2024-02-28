var countDigits = function (num) {
     let countSuccess = 0;
     let countFailed = 0;
     let arrayNum = num.toString().split("");
     let numInt;
     for (let i = 0; i < arrayNum.length; i++) {
          if (parseInt(num) % parseInt(arrayNum[i]) === 0) {
               countSuccess++;
          } else {
               countFailed++;
               numInt = arrayNum[i];
          }
     }
     if (countSuccess != 0) {
          console.log(countSuccess);
     } else {
          if (countFailed === 1) {
               console.log(numInt);
          } else {
               return 0;
          }
     }
};

//My decision

// solution in one line and simple

var countDigits = function (num) {
     let tempNum = num;
     let count = 0;

     while (tempNum !== 0) {
          let digit = tempNum % 10;
          if (num % digit === 0) {
               count++;
          }
          tempNum = Math.floor(tempNum / 10);
     }

     return count;
};

const countDigits = (num) =>
     num
          .toString()
          .split("")
          .reduce((acc, cur) => (num % +cur === 0 ? acc + 1 : acc), 0);

// example

countDigits(35);
