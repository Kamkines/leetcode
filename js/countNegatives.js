var countNegatives = function(grid) {
      let count = 0;
      for(let i = 0; grid.length > i; i++){
        count += grid[i].filter(function(num){
            return num < 0
        }).length
      }

      console.log(count)
};

// example
countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])