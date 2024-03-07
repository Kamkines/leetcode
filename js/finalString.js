var finalString = function (s) {
     let newArray = [];
     for (char of s) {
          if (char == "i") {
               newArray.reverse().join("");
          } else {
               newArray.push(char);
          }
     }
     console.log(newArray.join(""));
};

// example
finalString("poiinter");
