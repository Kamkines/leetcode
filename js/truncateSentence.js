var truncateSentence = function (s, k) {
     return s.split(" ").splice(0, k).join(" ");
};

//splice метод для удаления элементов из массива

// example
truncateSentence("Hello how are you Contestant", 4);
