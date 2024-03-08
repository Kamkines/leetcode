var sortSentence = function (s) {
     const array = s.split(" ");
     let newArray = [];
     for (let i = 0; i < array.length; i++) {
          let temp = array[i].split("");
          let objTemp = {
               value: temp.slice(0, -1),
               index: temp[temp.length - 1],
          };
          newArray[objTemp.index - 1] = objTemp.value.join("");
     }

     console.log(newArray.join(" "));
};

// example
sortSentence("is2 sentence4 This1 a3");
