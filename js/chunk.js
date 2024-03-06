var chunk = function (arr, size) {
     let chunkArray = [];
     let count = 0;
     while (count < arr.length) {
          chunkArray.push(arr.slice(count, size + count));
          count += size;
     }
     console.log(chunkArray);
};

// example
chunk([8, 5, 3, 2, 6], (size = 6));
