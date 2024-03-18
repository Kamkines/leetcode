var prefixCount = function (words, pref) {
     let count = 0;
     words.map(function (word) {
          if (word.startsWith(pref)) {
               count++;
          }
     });
     console.log(count);
};

// метод попроще в одну линию, сделать через фильтр и длину найденного массива return(words.filter(e => e.startsWith(pref)).length);

// example

prefixCount((words = ["leetcode", "win", "loops", "success"]), (pref = "code"));
