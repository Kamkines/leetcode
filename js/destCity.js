var destCity = function (paths) {
     let srcSet = new Set(); // устанавливает коллекцию уникальных значений
     let destination = [];
     for (let [src, dest] of paths) {
          srcSet.add(src);
          destination.push(dest);
     }

     for (let dest of destination) {
          if (!srcSet.has(dest)) console.log(dest);
     }
};

// example

destCity([
     [
          ["B", "C"],
          ["D", "B"],
          ["C", "A"],
     ],
]);
