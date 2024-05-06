var deleteGreatestValue = function (grid) {
    answer = 0 // ответ
    for (let i = 0; grid[0].length !== 0; i++) { // утверждение количестве повторений в зависимсоти от элементов в первом элементе
        let rowArr = [] // нужен для установки макс значения из двух элементов
        for (let i = 0; i < grid.length; i++) { //  утверждение количестве повторений в зависимсоти от количества массивов 
            let maxInRow = Math.max(...grid[i])
            let index = grid[i].indexOf(maxInRow)
            rowArr.push(maxInRow)

            grid[i].splice(index, 1)
        }

        let max = Math.max(...rowArr)
        answer += max
    }
    return answer
};


// example

deleteGreatestValue(grid = [[1,2,4],[3,3,1]])