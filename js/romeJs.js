/**
 * @param {string}
 * @return {number}
 */
var romanToInt = function (s) {
     let arrayRome = s.split("");

     let num = 0;

     for (let i = 0; i < arrayRome.length; i++) {
          switch (arrayRome[i]) {
               case "I":
                    if (
                         String(arrayRome[i + 1]) === "V" ||
                         String(arrayRome[i + 1]) === "X"
                    ) {
                         num -= 1;
                    } else {
                         num += 1;
                    }
                    break;
               case "V":
                    num += 5;
                    break;
               case "X":
                    if (
                         String(arrayRome[i + 1]) === "L" ||
                         String(arrayRome[i + 1]) === "C"
                    ) {
                         num -= 10;
                    } else {
                         num += 10;
                    }
                    break;
               case "L":
                    num += 50;
                    break;
               case "C":
                    if (
                         String(arrayRome[i + 1]) === "D" ||
                         String(arrayRome[i + 1]) === "M"
                    ) {
                         num -= 100;
                    } else {
                         num += 100;
                    }
                    break;
               case "D":
                    num += 500;
                    break;
               case "M":
                    num += 1000;
                    break;
          }
     }

     return num;

     // console.log(num)
};

//Example
romanToInt("MCMXCIV");
