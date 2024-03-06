var reverseWords = function (s) {
     let words = s.split(" ");
     let newArray = [];
     for (word of words) {
          newArray.push(word.split("").reverse().join(""));
     }
     console.log(newArray.join(" "));
};

//было полное разделение по буквам, потом перевернули с помощью reverse и соединили обратно буквы в слова с помощью join

// example
reverseWords("Let's take LeetCode contest");
