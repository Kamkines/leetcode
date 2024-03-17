var removeTrailingZeros = function (num) {
     let newStr = "";
     for (i = num.length - 1; i >= 0; i--) {
          if (num[i] !== "0" || newStr.length > 0) {
               newStr = num[i] + newStr;
          }
     }

     console.log(newStr);
};

// example

removeTrailingZeros("51230100");
