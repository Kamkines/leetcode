var isSameAfterReversals = function (num) {
     let curNum = String(num).length;
     let prevNum = Number(String(num).split("").reverse().join(""));
     let lenPrevNum = String(prevNum).length;
     if (curNum === lenPrevNum) {
          return true;
     } else {
          return false;
     }
};

// example
isSameAfterReversals(1800);
