var numJewelsInStones = function (jewels, stones) {
     let jewelsLength = jewels.split("").filter((elem) => elem === "A").length;
     let stonesLength = stones.split("").filter((elem) => elem === "A").length;

     console.log(jewelsLength + stonesLength);
};

// example

numJewelsInStones("aA", "aAAbbbb");
